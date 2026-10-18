#!/usr/bin/env python3
"""
Génère une vraie page HTML (indexable par Google) pour chaque province qui n'a pas
encore de guide dédié : <id>/index.html, à partir des mêmes données que la fiche
interactive de l'accueil (ui/data-provinces.js, ui/photos.js, ui/data-content.js).

À relancer après toute modification de ces fichiers :  python3 scripts/build-provinces.py
Produit aussi l'image de partage photos/og/<id>.jpg et ajoute les pages au sitemap.
"""
import html, json, os, re, subprocess, urllib.parse
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://www.leguidecambodge.com/"
CSS_V = "28"

dump = subprocess.run(["node", "-e", r'''
global.window={};const fs=require("fs");const r=f=>fs.readFileSync(f,"utf8");
eval(r("ui/data-provinces.js")+";"+r("ui/data-content.js")+";"+r("ui/photos.js")+
 ";process.stdout.write(JSON.stringify({DEST,REGIONS,EXPERIENCES,TRIPS,GUIDES,PH}))");
'''], cwd=ROOT, capture_output=True, text=True, check=True).stdout
D = json.loads(dump)
DEST, REGIONS, EXPS, TRIPS, GUIDES, PH = (D[k] for k in ("DEST", "REGIONS", "EXPERIENCES", "TRIPS", "GUIDES", "PH"))
BYID = {d["id"]: d for d in DEST}
# provinces sans guide écrit à la main : dossier absent, ou page déjà générée par ce script (repère MARK).
# Les guides écrits à la main (siem-reap/, kampot/…) ne sont jamais écrasés.
MARK = "Page générée par scripts/build-provinces.py"
def generated_or_missing(pid):
    f = os.path.join(ROOT, pid, "index.html")
    return not os.path.exists(f) or MARK in open(f, encoding="utf8").read()
TARGET = [d["id"] for d in DEST if generated_or_missing(d["id"])]

esc = html.escape
short = lambda n: n.split(" &")[0]
best_short = lambda d: re.split(r"\s\(", d["best"].split(".")[0].split(":")[0])[0].strip()
CJ = "https://www.tkqlhce.com/click-101812079-12677526?url="

def link_for(pid):
    """Lien vers le meilleur guide d'une province, depuis une page /<id>/."""
    if pid in TARGET: return f"../{pid}/"
    if pid in GUIDES: return "../" + GUIDES[pid][0][1]
    return f"../#dest/{pid}"

def photos(pid):
    p = PH.get(pid) or {}
    items = ([p["card"]] if p.get("card") else []) + (p.get("gal") or [])
    out = []
    for o in items:
        src = o["src"]
        out.append({"src": src if src.startswith("http") else "../" + src, "local": None if src.startswith("http") else urllib.parse.unquote(src), "credit": o.get("credit", "")})
    return out

def og_image(pid, ph):
    if not ph or not ph[0]["local"]: return SITE + "photos/og-accueil.jpg"
    os.makedirs(os.path.join(ROOT, "photos/og"), exist_ok=True)
    out = os.path.join(ROOT, f"photos/og/{pid}.jpg")
    im = Image.open(os.path.join(ROOT, ph[0]["local"])).convert("RGB")
    W, H = im.size; th = round(W * 630 / 1200)
    if th <= H:
        top = (H - th) // 2; im = im.crop((0, top, W, top + th))
    im.resize((1200, 630), Image.LANCZOS).save(out, "JPEG", quality=80, optimize=True, progressive=True)
    return SITE + f"photos/og/{pid}.jpg"

HEAD_SCRIPTS = '''<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9463726773327954" crossorigin="anonymous"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGJTQPVHZJ"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZGJTQPVHZJ');</script>'''

PAGE_CSS = '''<style>
.dhero img.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.sp-gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-top:30px}
.sp-gal figure{margin:0}.sp-gal img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--r);display:block}
.sp-gal figcaption{font-size:12px;color:var(--mute);margin-top:6px}.sp-gal figcaption a{text-decoration:underline}
.dhero .credit a{color:inherit;text-decoration:underline}
.sp-cta{display:flex;gap:10px;flex-wrap:wrap;margin:30px 0}
.sp-near{display:flex;gap:10px;flex-wrap:wrap}.sp-near a{border:1px solid var(--line);border-radius:999px;padding:8px 14px;background:#fff;font-size:14px}
</style>'''

PARTIALS = os.path.join(ROOT, "scripts/partials")
part = lambda n: open(os.path.join(PARTIALS, n), encoding="utf8").read().strip()
COOKIE = part("cookie.html")

def page(d):
    pid, name, sn = d["id"], d["name"], short(d["name"])
    exps = [e for e in EXPS if pid in e["d"]]
    trips = [t for t in TRIPS if pid in t["route"]]
    ph = photos(pid)
    og = og_image(pid, ph)
    title = f"{sn} (Cambodge) : que voir, que faire, où dormir"
    desc = f"{sn}, province du Cambodge : {d['tag'][0].lower() + d['tag'][1:]}. Lieux incontournables, activités, cuisine, hébergement et comment s'y rendre."
    if len(desc) > 160: desc = desc[:157].rsplit(" ", 1)[0] + "…"
    url = f"{SITE}{pid}/"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "TouristDestination", "@id": url + "#destination", "name": f"{sn}, Cambodge", "description": d["intro"], "url": url,
         "image": og, "geo": {"@type": "GeoCoordinates", "latitude": d["lat"], "longitude": d["lon"]},
         "containedInPlace": {"@type": "Country", "name": "Cambodge"},
         "includesAttraction": [{"@type": "TouristAttraction", "name": p} for p in d["places"]]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE},
            {"@type": "ListItem", "position": 2, "name": sn, "item": url}]}]}
    alert = ""
    if d.get("alert"):
        alert = f'''<div class="wrap"><div class="secalert" role="alert"><b>⚠️ Sécurité — frontière thaïlandaise</b><p>{esc(d["alert"])} Source : <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/cambodge/" target="_blank" rel="noopener">France Diplomatie</a>, mise à jour du 21 septembre 2026 ; la situation peut évoluer.</p></div></div>'''
    hero = ph[0] if ph else None
    preload = f'<link rel="preload" as="image" href="{esc(hero["src"])}" fetchpriority="high">\n' if hero else ""
    hero_html = (f'<img class="bg" src="{esc(hero["src"])}" alt="{esc(sn)}, Cambodge" fetchpriority="high">' + (f'<span class="credit">Photo : {hero["credit"]}</span>' if hero["credit"] else "")) if hero else ""
    gal = "".join(f'<figure><img src="{esc(o["src"])}" alt="{esc(sn)}, Cambodge" loading="lazy">' + (f'<figcaption>Photo : {o["credit"]}</figcaption>' if o["credit"] else "") + "</figure>" for o in ph[1:])
    half = (len(d["todo"]) + 1) // 2
    li = lambda xs: "".join(f"<li>{esc(x)}</li>" for x in xs)
    booking = CJ + urllib.parse.quote(f"https://www.booking.com/searchresults.fr.html?ss={urllib.parse.quote(sn + ', Cambodge')}", safe="")
    near = "".join(f'<a href="{link_for(n)}">{esc(short(BYID[n]["name"]))}</a>' for n in d.get("nearby", []) if n in BYID)
    trips_html = "".join(f'<li><a href="../#trip/{t["id"]}">{esc(t["name"])}</a> · {t["days"]} jours</li>' for t in trips)
    return f'''<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="{url}">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Le Guide Cambodge">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
{preload}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600&family=Noto+Sans+Khmer:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../ui/style.css?v={CSS_V}">
{PAGE_CSS}
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
{HEAD_SCRIPTS}
</head>
<body>
<!-- Page générée par scripts/build-provinces.py : ne pas modifier à la main, modifier les données puis relancer le script -->
{part("header.html")}
<header class="dhero">{hero_html}<div class="wrap"><nav class="crumbs" aria-label="Fil d'Ariane"><a href="../">Accueil</a> / <a href="../#explore">Les 25 provinces</a> / {esc(REGIONS[d["region"]])}</nav><h1>{esc(sn)}</h1><div class="khname">{esc(d["kh"])}</div><p style="font-size:20px;max-width:50ch;margin-top:14px;opacity:.9">{esc(d["tag"])}</p></div></header>
<main>
<div class="wrap"><div class="facts"><div><small>Durée conseillée</small><b>{esc(d["duration"])}</b></div><div><small>Meilleure période</small><b>{esc(best_short(d))}</b></div><div><small>Région</small><b>{esc(REGIONS[d["region"]])}</b></div><div><small>Idéal pour</small><b style="font-size:15px">{" · ".join(esc(e["name"]) for e in exps[:3])}</b></div></div></div>
{alert}
<div class="wrap"><div class="dbody" style="grid-template-columns:1fr"><div>
<h2>Pourquoi aller à {esc(sn)}</h2><p class="lead">{esc(d["intro"])}</p>
<h2>Lieux incontournables</h2><ol class="plist">{"".join(f"<li><span>{esc(p)}</span></li>" for p in d["places"])}</ol>
<h2>À faire</h2><div class="two"><ul>{li(d["todo"][:half])}</ul><ul>{li(d["todo"][half:])}</ul></div>
{f'<div class="sp-gal">{gal}</div>' if gal else ""}
<h2>Cuisine &amp; culture</h2><ul>{li(d["food"])}</ul>
<h2>Trésors cachés</h2><ul>{li(d["hidden"])}</ul>
<h2>Où dormir</h2><ul class="plist" style="counter-reset:p">{"".join(f"<li>{esc(x)}</li>" for x in d["stay"])}</ul>
<p class="sp-cta"><a class="btn dark" target="_blank" rel="sponsored noopener noreferrer" href="{booking}">Comparer les hébergements à {esc(sn)}</a></p><p class="tri" style="font-size:12px;color:var(--mute)">Lien partenaire Booking.com : sans surcoût pour vous.</p>
<h2>Comment s'y rendre</h2><p class="lead" style="font-size:17px">{esc(d["getThere"])}</p>
<h3 style="font-size:22px;margin:26px 0 8px">Meilleure période</h3><p>{esc(d["best"])}</p>
{f'<h2>Itinéraires qui passent par {esc(sn)}</h2><ul>{trips_html}</ul>' if trips_html else ""}
{f'<h2>Provinces voisines</h2><div class="sp-near">{near}</div>' if near else ""}
<p class="sp-cta"><a class="btn dark" href="../#dest/{pid}">Voir {esc(sn)} sur la carte interactive</a><a class="btn" style="border:1px solid var(--line)" href="../#events">Les événements de la semaine</a></p>
</div></div></div>
</main>
{part("footer.html")}
{COOKIE}
</body>
</html>
'''

def main():
    for pid in TARGET:
        d = BYID[pid]
        os.makedirs(os.path.join(ROOT, pid), exist_ok=True)
        open(os.path.join(ROOT, pid, "index.html"), "w", encoding="utf8").write(page(d))
    # sitemap : ajoute les pages manquantes
    sp = os.path.join(ROOT, "sitemap.xml"); s = open(sp, encoding="utf8").read()
    add = "".join(f"  <url>\n    <loc>{SITE}{pid}/</loc>\n    <lastmod>2026-10-17</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n" for pid in TARGET if f"{SITE}{pid}/<" not in s)
    if add: open(sp, "w", encoding="utf8").write(s.replace("</urlset>", add + "</urlset>"))
    print(len(TARGET), "pages :", " ".join(TARGET))

if __name__ == "__main__":
    main()
