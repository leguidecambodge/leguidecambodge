#!/usr/bin/env python3
"""
Contenu de secours de l'accueil (dans <div id="app"> de index.html) : ce que lisent les robots
(Google, AdSense) et les visiteurs sans JavaScript. Il reprend les MÊMES textes que l'accueil
interactif (ui/app.js, ui/data-provinces.js) et la description de chaque page du site : aucun
texte caché ou différent de ce que voit un visiteur. ui/app.js le remplace dès son chargement.

À relancer après une modification des provinces ou des pages :  python3 scripts/build-home-static.py
"""
import html, json, os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
esc = html.escape

D = json.loads(subprocess.run(["node", "-e", r'''
global.window={};const fs=require("fs");const r=f=>fs.readFileSync(f,"utf8");
eval(r("ui/data-provinces.js")+";process.stdout.write(JSON.stringify({DEST,REGIONS}))");
'''], cwd=ROOT, capture_output=True, text=True, check=True).stdout)
DEST, REGIONS = D["DEST"], D["REGIONS"]
app = open(os.path.join(ROOT, "ui/app.js"), encoding="utf8").read()
HERO = re.search(r"Le Cambodge, <em[^>]*>au-delà</em> des temples que vous connaissez\.</h1><p>(.*?)</p>", app).group(1)

def meta_desc(slug):
    s = open(os.path.join(ROOT, slug, "index.html"), encoding="utf8").read()
    return html.unescape(re.search(r'<meta name="description" content="([^"]*)"', s).group(1))

def first_sentence(t):
    m = re.match(r"(.+?[.!?])(\s|$)", t)
    return m.group(1) if m else t

def link(slug, label):
    return f'<a href="{slug}/">{esc(label)}</a>'

PRATIQUE = [("visa-cambodge", "Visa"), ("budget-voyage-cambodge", "Budget"), ("quand-partir", "Quand partir"),
            ("meilleure-periode-cambodge", "Meilleure période"), ("transports", "Transports"), ("vols", "Vols"),
            ("hotels", "Hôtels"), ("guide-pratique-cambodge", "Guide pratique"), ("itineraire-cambodge", "Itinéraires")]
DECOUVRIR = [("angkor", "Angkor"), ("angkor-wat", "Angkor Wat"), ("histoire-cambodge", "Histoire du Cambodge"),
             ("cuisine-khmere", "Cuisine khmère"), ("lexique-khmer", "Lexique khmer"), ("activites", "Activités"),
             ("evenements", "Événements"), ("bons-plans", "Bons plans"), ("quartiers", "Quartiers"),
             ("photos-videos", "Photos & vidéos"), ("carte-interactive", "Carte interactive"), ("blog", "Blog")]

# Barre de menu et bandeau identiques à ceux que dessine ui/app.js (nav() et home()) : la grande photo
# s'affiche dès le HTML, sans attendre les scripts (vitesse d'affichage mesurée par Google, LCP),
# et rien ne bouge quand ui/app.js remplace ce contenu.
NAV = ('<nav class="top" aria-label="Navigation principale"><div class="wrap"><div class="brand">'
       '<a class="logo" href="./" aria-label="Le Guide Cambodge, accueil"><i></i>Le Guide<span style="font-weight:300;color:var(--mute)">&nbsp;Cambodge</span></a>'
       '<div class="khwrap"><span class="khtime">&nbsp;</span><span class="khdate">&nbsp;</span></div></div>'
       '<ul id="menu"><li><a href="./" class="on">Accueil</a></li><li><a href="#explore">Explorer le Cambodge</a></li>'
       '<li><a href="evenements/">Événements</a></li><li><a href="activites/">Expériences</a></li>'
       '<li><a href="itineraire-cambodge/">Itinéraires</a></li><li><a href="guide-pratique-cambodge/">Infos pratiques</a></li></ul>'
       '<div class="navtools"><span class="pill">⌕<span class="sl"> Rechercher</span></span><span class="pill">♥ 0</span>'
       '<span class="pill">🇫🇷 FR</span><span class="burger pill">☰</span></div></div></nav>')
HERO_BLOCK = ('<header class="hero" id="top"><div class="scene ph" style="background-image:url(\'photos/angkor%208.webp\');--pos:50% 65%"></div>'
              '<div class="wrap"><span class="eyebrow" style="color:var(--sand)">Royaume du Cambodge · 25 provinces</span>'
              '<h1>Le Cambodge, <em style="white-space:nowrap">au-delà</em> des temples que vous connaissez.</h1>'
              f'<p>{HERO}</p></div></header>')

def build():
    out = [NAV, HERO_BLOCK, '<main class="wrap" style="padding:48px 0 64px;max-width:900px">',
           '<p style="margin-top:14px">Le Guide Cambodge est un guide de voyage indépendant et gratuit, en français : '
           'les 25 provinces du pays, une carte interactive, des itinéraires, un agenda des événements et des conseils '
           'pratiques vérifiés auprès de sources officielles. <a href="a-propos/">En savoir plus sur le guide</a>.</p>',
           '<h2 style="font-size:32px;margin:40px 0 8px">Les 25 provinces, région par région</h2>']
    for rid, rname in REGIONS.items():
        provs = [d for d in DEST if d["region"] == rid]
        if not provs: continue
        out.append(f'<h3 style="font-size:22px;margin:26px 0 8px">{esc(rname)}</h3><ul style="display:grid;gap:8px;padding-left:18px">')
        for d in provs:
            name = d["name"].split(" &")[0]
            href = d["id"] + "/" if os.path.exists(os.path.join(ROOT, d["id"], "index.html")) else "#dest/" + d["id"]
            out.append(f'<li><a href="{href}"><b>{esc(name)}</b></a> — {esc(d["tag"])}. {esc(first_sentence(d["intro"]))}</li>')
        out.append("</ul>")
    for title, pages in (("Préparer votre voyage", PRATIQUE), ("Culture, temples et bonnes adresses", DECOUVRIR)):
        out.append(f'<h2 style="font-size:32px;margin:40px 0 8px">{title}</h2><ul style="display:grid;gap:8px;padding-left:18px">')
        for slug, label in pages:
            out.append(f"<li>{link(slug, label)} — {esc(meta_desc(slug))}</li>")
        out.append("</ul>")
    out.append('<p style="margin-top:36px;font-size:14px;color:var(--mute)"><a href="a-propos/">À propos</a> · '
               '<a href="mentions-legales/">Mentions légales</a> · <a href="a-propos/">Contact</a></p></main>')
    return "".join(out)

def main():
    p = os.path.join(ROOT, "index.html")
    s = open(p, encoding="utf8").read()
    new = '<div id="app"><!-- contenu de secours généré par scripts/build-home-static.py -->' + build() + "</div>"
    s2, n = re.subn(r'<div id="app">.*?</div>(?=\s*<div id="lbx")', lambda m: new, s, count=1, flags=re.S)
    assert n == 1, "bloc #app introuvable"
    open(p, "w", encoding="utf8").write(s2)
    txt = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", build()))).strip()
    print("contenu de secours :", len(txt), "caractères")

if __name__ == "__main__":
    main()
