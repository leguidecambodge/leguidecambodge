#!/usr/bin/env python3
"""
Passe les pages de l'ancien design (marron foncé, assets/style.css) sur le design de l'accueil
(ui/style.css : crème, Fraunces/Inter), sans toucher à leur contenu.

1. Génère assets/legacy.css à partir de assets/style.css : mêmes composants, couleurs passées en clair,
   polices Cinzel/Crimson remplacées, règles de l'ancien en-tête/pied de page retirées.
2. Pour chaque page qui charge assets/style.css :
   - polices + feuilles de style du nouveau design, code AdSense + Analytics (comme les pages provinces) ;
   - ancien en-tête remplacé par l'en-tête des pages statiques, ancien pied de page par le nouveau ;
   - bouton flottant « ← Accueil » retiré (il cachait le texte sur mobile) ;
   - couleurs écrites en dur (attributs style et blocs <style>) converties pour un fond clair ;
   - bannière cookies du nouveau design.

Lancement unique :  python3 scripts/convert-legacy.py
"""
import glob, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_V = "26"

# ---------- conversion des couleurs ----------
NUM = r"\s*([\d.]+)\s*"
def rgba(r, g, b): return re.compile(r"rgba?\(\s*%d\s*,\s*%d\s*,\s*%d\s*(?:,%s)?\)" % (r, g, b, NUM))

CREAM = [rgba(245, 233, 208), rgba(248, 239, 216), rgba(255, 248, 231)]
DARK_RGBA = [rgba(44, 21, 7), rgba(30, 14, 4), rgba(62, 32, 16), rgba(26, 8, 0), rgba(40, 20, 8), rgba(52, 26, 8), rgba(74, 42, 18)]
GOLD_RGBA = [rgba(212, 150, 26), rgba(221, 164, 34), rgba(212, 175, 55)]
# fonds très sombres → crème foncé ; fonds sombres → crème
DARKEST = ["#1A0800", "#1E0E06", "#1E0E04", "#281408", "#2C1006", "#140600", "#100500"]
DARK = ["#2C1507", "#2C1508", "#3E2010", "#341A08", "#4A2A12", "#3E1C06", "#2E1608", "#3A1C08", "#2A1406"]
VAR_DARKEST = ["var(--fond-footer)", "var(--fond-sombre)", "var(--nuit)"]
VAR_DARK = ["var(--fond-a)", "var(--fond-b)", "var(--fond-c)"]
# couleurs de texte pastel (lisibles sur fond sombre) → équivalents foncés
PASTEL = {"#7AB8F5": "#2F5D7C", "#8ADBB0": "#1E4D3B", "#7FD39E": "#1E4D3B", "#F59AB8": "#A3245A",
          "#FFB899": "#B8452B", "#7ADBD5": "#1F6F6A", "#F7D265": "var(--lacq)", "#DDA422": "#8A5A00",
          "#D4961A": "#8A5A00", "#C9A96E": "#7A5A2A", "#52A06E": "#1E4D3B", "#E8C870": "#8A5A00",
          "#FFD580": "#8A5A00", "#F0C060": "#8A5A00", "#A8E6C1": "#1E4D3B", "#9FD4FF": "#2F5D7C"}
TEXT_PROPS = {"color", "-webkit-text-fill-color", "caret-color", "text-decoration-color", "fill", "stroke"}
BG_PROPS = {"background", "background-color", "background-image"}

def alpha(m, default=1.0):
    try: return float(m.group(1)) if m.group(1) is not None else default
    except (IndexError, TypeError): return default

import colorsys
def _rgb(h):
    h = h.lstrip("#")
    if len(h) == 3: h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
def _lum(r, g, b):
    f = lambda c: c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4
    return .2126 * f(r) + .7152 * f(g) + .0722 * f(b)
def _darken(r, g, b, l=.3):
    h, _, s_ = colorsys.rgb_to_hls(r, g, b)
    r, g, b = colorsys.hls_to_rgb(h, l, min(s_, .7))
    return "#%02X%02X%02X" % (round(r * 255), round(g * 255), round(b * 255))
HEX = re.compile(r"#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}\b")
RGBA = re.compile(r"rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)")
def generic(v, ctx):
    """Filet de sécurité pour les couleurs non listées : texte clair → foncé, fond sombre → clair."""
    def fix(r, g, b, a=1.0, orig=""):
        L = _lum(r, g, b)
        neutral = max(r, g, b) - min(r, g, b) < .03
        if ctx == "bg" and neutral: return orig  # noir/gris neutres : voiles sur photos, visionneuse → inchangés
        if ctx == "border" and L > .85 and a < .5: return "var(--line)"  # filets blancs invisibles sur fond clair
        if ctx == "text" and L > .3 and not (r > .97 and g > .97 and b > .97): return _darken(r, g, b)
        if ctx == "bg" and L < .05 and a >= .3: return "#FFFFFF"
        if ctx == "bg" and L < .05: return "rgba(255,255,255,.6)"
        if ctx == "border" and L < .05: return "var(--line)"
        return orig
    v = HEX.sub(lambda m: fix(*_rgb(m.group(0)), orig=m.group(0)), v)
    v = RGBA.sub(lambda m: fix(int(m.group(1)) / 255, int(m.group(2)) / 255, int(m.group(3)) / 255, float(m.group(4) or 1), orig=m.group(0)), v)
    return v

def conv_text(v):
    for rx in CREAM:
        v = rx.sub(lambda m: "var(--ink)" if alpha(m) >= .85 else "var(--ink2)" if alpha(m) >= .6 else "var(--mute)", v)
    v = re.sub(r"var\(--creme\)|#F8EFD8\b|#F5E9D0\b", "var(--ink)", v, flags=re.I)
    v = re.sub(r"var\(--or-clair\)", "var(--lacq)", v)
    v = re.sub(r"var\(--or\)(?!-)", "#8A5A00", v)
    v = re.sub(r"var\(--sable\)", "#7A5A2A", v)
    v = re.sub(r"var\(--vert-clair\)", "var(--jade)", v)
    for rx in GOLD_RGBA:
        v = rx.sub(lambda m: "#8A5A00" if alpha(m) >= .6 else "rgba(138,90,0,%.2f)" % max(alpha(m), .55), v)
    v = re.sub(r"var\(--brun\)|var\(--nuit\)", "var(--ink)", v)
    for rx in DARK_RGBA: v = rx.sub("var(--ink)", v)
    for h in DARKEST + DARK: v = re.sub(re.escape(h) + r"\b", "var(--ink)", v, flags=re.I)
    for k, nv in PASTEL.items(): v = re.sub(re.escape(k) + r"\b", nv, v, flags=re.I)
    return generic(v, "text")

def conv_bg(v):
    for rx in DARK_RGBA:
        v = rx.sub(lambda m: "#FFFFFF" if alpha(m) >= .35 else "rgba(255,255,255,.6)", v)
    for h in DARKEST: v = re.sub(re.escape(h) + r"\b", "var(--cream2)", v, flags=re.I)
    for h in DARK: v = re.sub(re.escape(h) + r"\b", "var(--cream)", v, flags=re.I)
    for t in VAR_DARKEST: v = v.replace(t, "var(--cream2)")
    for t in VAR_DARK: v = v.replace(t, "var(--cream)")
    v = re.sub(r"var\(--brun\)", "var(--cream)", v)
    for rx in CREAM:
        v = rx.sub(lambda m: "rgba(23,32,31,%.2f)" % min(.08, alpha(m) * .5), v)
    v = re.sub(r"var\(--creme\)", "var(--ink)", v)
    return generic(v, "bg")

def conv_border(v):
    for rx in CREAM:
        v = rx.sub(lambda m: "rgba(23,32,31,%.2f)" % max(.12, min(.3, alpha(m) * .5)), v)
    for rx in DARK_RGBA: v = rx.sub("var(--line)", v)
    for h in DARKEST + DARK: v = re.sub(re.escape(h) + r"\b", "var(--line)", v, flags=re.I)
    v = re.sub(r"var\(--creme\)", "var(--line)", v)
    v = re.sub(r"var\(--fond-[a-z]+\)|var\(--brun\)|var\(--nuit\)", "var(--line)", v)
    return generic(v, "border")

def conv_shadow(v):
    v = re.sub(r"rgba\(\s*0\s*,\s*0\s*,\s*0\s*,%s\)" % NUM, lambda m: "rgba(0,0,0,%.2f)" % (float(m.group(1)) * .35), v)
    for rx in GOLD_RGBA: v = rx.sub(lambda m: "rgba(201,162,74,%.2f)" % (alpha(m) * .4), v)
    v = v.replace("var(--or-glow)", "rgba(201,162,74,.18)").replace("var(--rouge-glow)", "rgba(184,69,43,.15)")
    for rx in DARK_RGBA: v = rx.sub("rgba(0,0,0,.08)", v)
    return v

def conv_font(v):
    v = re.sub(r"\\?['\"]?Cinzel\\?['\"]?\s*,\s*serif", "var(--serif)", v)
    v = re.sub(r"\\?['\"]?Crimson Pro\\?['\"]?\s*,\s*serif", "var(--sans)", v)
    return v

def conv_decl(prop, val):
    p = prop.strip().lower()
    if p in TEXT_PROPS: return conv_text(val)
    if p in BG_PROPS: return conv_bg(val)
    if p.startswith("border") or p.startswith("outline") or p == "column-rule": return conv_border(val)
    if p == "box-shadow": return conv_shadow(val)
    if p == "text-shadow": return "none"
    if p in ("font-family", "font"): return conv_font(val)
    if p == "backdrop-filter": return val
    return val

def split_decls(s):
    out, depth, cur = [], 0, ""
    for ch in s:
        if ch == "(": depth += 1
        elif ch == ")": depth -= 1
        if ch == ";" and depth == 0: out.append(cur); cur = ""
        else: cur += ch
    if cur.strip(): out.append(cur)
    return out

def conv_decls(s):
    res = []
    for d in split_decls(s):
        if ":" not in d: res.append(d); continue
        prop, val = d.split(":", 1)
        res.append(prop + ":" + conv_decl(prop, val))
    return ";".join(res)

def conv_css(css):
    """Convertit chaque bloc { ... } d'une feuille de style (gère les @media imbriqués)."""
    def f(m):
        sel, body = m.group(1), conv_decls(m.group(2))
        # fondu en bas des photos (vers l'ancien fond sombre) : devenu un voile blanc → supprimé
        if "::after" in sel and re.search(r"background:linear-gradient\(to top,#FFFFFF", body):
            body = re.sub(r"background:linear-gradient\(to top,#FFFFFF[^;]*?\)(?=;|$)", "background:none", body)
        return sel + "{" + body + "}"
    return re.sub(r"([^{}]*)\{([^{}]*)\}", f, css)

# ---------- assets/legacy.css ----------
DROP_SEL = re.compile(r"(^|[\s,>+~])(header|footer|nav\[role|\.navbar|\.nav-|\.mobile-nav|\.hamburger|\.footer-|\.logo-|\.lang-switcher|\[data-theme|#cookie-banner|\.cookie-|\.logo\b|::-webkit-scrollbar)", re.I)
def drop_rules(css):
    """Retire les règles de l'ancien en-tête / pied de page / thème clair (remplacés par le nouveau design)."""
    out, i = [], 0
    while i < len(css):
        j = css.find("{", i)
        if j < 0: out.append(css[i:]); break
        sel = css[i:j]
        if sel.strip().startswith("@"):
            # bloc @media : on traite l'intérieur récursivement
            depth, k = 1, j + 1
            while depth and k < len(css):
                depth += {"{": 1, "}": -1}.get(css[k], 0); k += 1
            inner = drop_rules(css[j + 1:k - 1])
            if inner.strip(): out.append(sel + "{" + inner + "}")
            i = k; continue
        k = css.find("}", j)
        sels = [s for s in sel.split(",") if not DROP_SEL.search(s.strip())]
        if sels: out.append(",".join(sels) + css[j:k + 1])
        i = k + 1
    return "".join(out)

def build_legacy_css():
    css = open(os.path.join(ROOT, "assets/style.css"), encoding="utf8").read()
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = drop_rules(css)
    css = re.sub(r":root\s*\{[^}]*\}", "", css, count=1)
    css = re.sub(r"(^|})\s*html\s*\{[^}]*\}", r"\1", css)
    css = re.sub(r"(^|})\s*body\s*\{[^}]*\}", r"\1", css)
    css = re.sub(r"(^|})\s*a\s*\{[^}]*\}", r"\1", css)
    css = conv_css(css)
    head = """/* Généré par scripts/convert-legacy.py à partir de assets/style.css : composants des anciennes pages
   aux couleurs du nouveau design. Chargé APRÈS ui/style.css. Ne pas modifier à la main. */
:root{--rouge:#B8452B;--or:#C9A24A;--or-clair:#E0C27A;--brun:var(--ink);--creme:var(--ink);--vert:var(--jade);--vert-clair:var(--jade);--sable:#7A5A2A;--nuit:var(--cream);--or-glow:rgba(201,162,74,.18);--rouge-glow:rgba(184,69,43,.15);--fond-a:var(--cream);--fond-b:var(--cream);--fond-c:var(--cream);--fond-sombre:var(--cream2);--fond-footer:var(--cream2)}
.legacy main{font-size:17px;line-height:1.65}
.legacy main a{text-decoration:underline;text-underline-offset:2px}
.legacy main a.btn,.legacy main a[class*=card],.legacy main a[style*="display:block"],.legacy main a[style*="display:flex"],.legacy main a[style*="padding"],.legacy main nav a{text-decoration:none}
.legacy main a[class]{text-decoration:none}
.legacy .act-book-btn,.legacy .hotels-compare-book-btn,.legacy .sov-btn-or,.legacy .form-submit,.legacy .nl-btn,.legacy #search-btn{background:var(--ink);color:var(--cream);border-radius:999px;font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:0;text-transform:none;padding:9px 16px}
.legacy .act-book-btn:hover,.legacy .hotels-compare-book-btn:hover,.legacy .sov-btn-or:hover,.legacy .form-submit:hover,.legacy .nl-btn:hover,.legacy #search-btn:hover{background:var(--ink2)}
.legacy main strong{color:inherit}
.legacy main .city-chip{background:#fff;border:1px solid var(--line);color:var(--ink2);font-size:13px;letter-spacing:0;padding:6px 12px;border-radius:999px}
.legacy .histoire-chrono li strong:not(:first-child){display:inline;font-family:inherit;font-size:inherit;letter-spacing:0;color:var(--ink);margin:0}
.legacy .section-label{font-family:var(--sans);font-size:11px;letter-spacing:.18em;font-weight:600;color:var(--lacq)}
.legacy .section-title{font-weight:500;color:var(--ink)}
.legacy .section-title em{color:var(--lacq)}
.legacy .section-divider{display:none}
.legacy .section-header{margin-bottom:40px}
.legacy .khmer-border{height:1px;background:var(--line);opacity:1}
.legacy .btn{font-family:var(--sans);font-size:14px;letter-spacing:0;text-transform:none;border-radius:999px;padding:13px 22px;font-weight:600}
.legacy .btn-primary,.legacy .btn-or{background:var(--ink);color:var(--cream)}
.legacy .btn-primary:hover,.legacy .btn-or:hover{background:var(--ink2);box-shadow:none}
.legacy .btn-outline{background:#fff;color:var(--ink);border:1px solid var(--line)}
.legacy .saison-card{flex-wrap:wrap}
.legacy .angkor-pratique-list li{display:block;position:relative;padding-left:16px}
.legacy .angkor-pratique-list li::before{position:absolute;left:0;top:5px;margin:0}
@media(max-width:600px){.legacy .saison-card{flex-direction:column}}
@media(max-width:600px){.legacy main [style*="grid-template-columns:1fr 1fr;"]{grid-template-columns:1fr!important}}
.legacy .galerie-item-city,.legacy .lb-city{color:#F2D8A0}
.legacy .galerie-item-caption,.legacy .lb-caption{color:rgba(255,255,255,.9)}
.legacy #lightbox-prev,.legacy #lightbox-next{color:#fff}
.legacy .lhero{color:#fff}
.legacy .lhero .section-label{color:#F2D8A0}
.legacy .lhero .section-title,.legacy .lhero h1{color:#fff}
.legacy .lhero .section-title em,.legacy .lhero h1 em{color:#F2D8A0}
"""
    open(os.path.join(ROOT, "assets/legacy.css"), "w", encoding="utf8").write(head + css)

# ---------- pages ----------
FONTS = '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600&family=Noto+Sans+Khmer:wght@400;600&display=swap" rel="stylesheet">'
HEAD_SCRIPTS = '''<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9463726773327954" crossorigin="anonymous"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGJTQPVHZJ"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZGJTQPVHZJ');</script>'''
HEADER = open(os.path.join(ROOT, "scripts/partials/header.html"), encoding="utf8").read().strip()
FOOTER = open(os.path.join(ROOT, "scripts/partials/footer.html"), encoding="utf8").read().strip()
COOKIE = open(os.path.join(ROOT, "scripts/partials/cookie.html"), encoding="utf8").read().strip()

BTN_KEYS = ("font-family", "font-size", "letter-spacing", "text-transform", "font-weight", "border-radius")
def pill(decls, hero=False):
    """Bouton de l'ancien design (petites capitales Cinzel) → bouton arrondi du nouveau design."""
    d = [x for x in split_decls(decls) if ":" in x]
    kv = [(a.strip().lower(), b.strip()) for a, b in (x.split(":", 1) for x in d)]
    bg = " ".join(v for k, v in kv if k in ("background", "background-color")).lower()
    filled = bg and "transparent" not in bg and "none" not in bg
    keep = [(k, v) for k, v in kv if k not in BTN_KEYS + ("background", "background-color", "color", "border", "padding")]
    if hero:
        look = [("background", "#fff"), ("color", "var(--ink)")] if filled else [("background", "transparent"), ("border", "1px solid rgba(255,255,255,.6)"), ("color", "#fff")]
    else:
        look = [("background", "var(--ink)"), ("color", "var(--cream)")] if filled else [("background", "#fff"), ("border", "1px solid var(--line)"), ("color", "var(--ink)")]
    base = [("font-family", "var(--sans)"), ("font-size", "14px"), ("font-weight", "600"), ("letter-spacing", "0"), ("text-transform", "none"), ("border-radius", "999px"), ("padding", "11px 20px")]
    return ";".join("%s:%s" % kv for kv in keep + base + look)

def is_btn(decls):
    s = decls.replace(" ", "").lower()
    return "text-transform:uppercase" in s and "padding:" in s

def conv_btns(html, hero=False):
    def f(m):
        tag, before, decls = m.group(1), m.group(2), m.group(3)
        if not is_btn(decls): return m.group(0)
        return "<%s%sstyle=\"%s\"" % (tag, before, pill(decls, hero))
    return re.sub(r'<(a|button)\b([^>]*?)style="([^"]*)"', f, html)

def conv_hero_decls(decls):
    """En-tête photo : on garde un texte clair sur la photo (comme les pages provinces)."""
    res = []
    for d in split_decls(decls):
        if ":" not in d: res.append(d); continue
        prop, val = d.split(":", 1); p = prop.strip().lower()
        if p == "filter": val = re.sub(r"brightness\(\s*[\d.]+\s*\)", "brightness(.6)", val)
        elif p in TEXT_PROPS:
            for rx in CREAM: val = rx.sub(lambda m: "#fff" if alpha(m) >= .75 else "rgba(255,255,255,.88)", val)
            val = re.sub(r"var\(--creme\)", "#fff", val)
            val = re.sub(r"var\(--or-clair\)|var\(--or\)(?!-)", "#F2D8A0", val)
        elif p.startswith("border"):
            for rx in CREAM: val = rx.sub("rgba(255,255,255,.6)", val)
        elif p in ("font-family", "font"): val = conv_font(val)
        res.append(prop + ":" + val)
    return ";".join(res)

def split_hero(s):
    """Renvoie (avant, en-tête photo, après) ; en-tête vide si la page n'a pas de photo en tête."""
    m = re.search(r"<main[^>]*>\s*(?:<!--.*?-->\s*)*(<section\b.*?</section>)", s, re.S)
    if not m: return s, "", ""
    sec = m.group(1)
    if not re.search(r'background(-image)?:[^;"]*url\(|<img[^>]*position:\s*absolute', sec): return s, "", ""
    return s[:m.start(1)], sec, s[m.end(1):]

JS_PROP = {"background": "background", "backgroundColor": "background-color", "color": "color", "borderColor": "border-color", "border": "border", "borderLeft": "border-left"}
def conv_js_styles(html):
    """Couleurs écrites par les scripts des pages (cartes générées en JavaScript)."""
    out, in_js = [], False
    COLOR_LIT = re.compile(r"'(#[0-9A-Fa-f]{3,6}|rgba?\([^')]*\))'")
    def lit(m):
        c = m.group(1)
        if any(rx.fullmatch(c) for rx in DARK_RGBA) or c.upper() in DARKEST + DARK: return "'rgba(255,255,255,.85)'"
        return "'" + generic(c, "text") + "'"
    for line in html.split("\n"):
        if re.search(r"<script(?![^>]*ld\+json)[^>]*>", line): in_js = True
        if in_js: line = COLOR_LIT.sub(lit, line)
        if "</script>" in line: in_js = False
        if "style.cssText" in line:
            line = re.sub(r"'([^'\\]*(?:\\.[^'\\]*)*)'|\"([^\"]*)\"|`([^`]*)`",
                          lambda m: next(q + conv_decls(g) + q for q, g in zip("'\"`", m.groups()) if g is not None), line)
        else:
            line = re.sub(r"\.style\.(background|backgroundColor|color|borderColor|border|borderLeft)\s*=\s*'([^']*)'",
                          lambda m: ".style.%s='%s'" % (m.group(1), conv_decl(JS_PROP[m.group(1)], m.group(2))), line)
        out.append(line)
    return "\n".join(out)

def conv_page(s):
    # <head>
    s = re.sub(r'<link rel="preload" as="style" href="https://fonts\.googleapis\.com/css2\?family=Cinzel[^>]*>\s*', "", s)
    s = re.sub(r'<noscript><link rel="stylesheet" href="https://fonts\.googleapis\.com/css2\?family=Cinzel[^>]*></noscript>\s*', "", s)
    s = re.sub(r'<link rel="stylesheet" href="\.\./assets/style\.css\?v=\d+">',
               FONTS + '\n<link rel="stylesheet" href="../ui/style.css?v=%s">\n<link rel="stylesheet" href="../assets/legacy.css?v=1">' % CSS_V, s, count=1)
    s = s.replace("</head>", HEAD_SCRIPTS + "\n</head>", 1)
    s = re.sub(r"<style>(.*?)</style>", lambda m: "<style>" + conv_css(m.group(1)) + "</style>", s, flags=re.S)
    # <body>
    s = re.sub(r"<body([^>]*)>", lambda m: '<body%s class="legacy">' % m.group(1) if "class=" not in m.group(1) else m.group(0), s, count=1)
    s = re.sub(r"<header>.*?</header>", HEADER, s, count=1, flags=re.S)
    s = re.sub(r"<footer\b.*?</footer>", FOOTER, s, count=1, flags=re.S)
    s = re.sub(r"\s*<a href=\"\.\./\" aria-label=\"Retour à l'accueil\"[^>]*>.*?</a>", "", s, count=1, flags=re.S)
    s = s.replace("</body>", COOKIE + "\n</body>", 1)
    # chiffres clés : 6 tuiles sur une seule ligne sur ordinateur (au lieu de 5 + 1)
    s = s.replace("minmax(150px,1fr));gap:16px;max-width:900px", "minmax(150px,1fr));gap:16px;max-width:1000px")
    # en-tête photo traité à part (texte clair), puis boutons et couleurs du reste de la page
    pre, hero, post = split_hero(s)
    if hero:
        hero = re.sub(r"<section\b", '<section class="lhero"', hero, count=1) if 'class="' not in hero.split(">", 1)[0] else hero
        hero = conv_btns(hero, hero=True)
        hero = re.sub(r'style="([^"]*)"', lambda m: 'style="' + conv_hero_decls(m.group(1)) + '"', hero)
    rest = conv_js_styles(conv_btns(pre + "\0HERO\0" + post))
    rest = re.sub(r'style="([^"]*)"', lambda m: 'style="' + conv_decls(m.group(1)) + '"', rest)
    # texte en gras : noir (le rouge laque reste réservé aux titres et accroches)
    rest = re.sub(r'<(strong|b)\b([^>]*?)style="([^"]*)"', lambda m: '<%s%sstyle="%s"' % (m.group(1), m.group(2), m.group(3).replace("color:var(--lacq)", "color:var(--ink)")), rest)
    return rest.replace("\0HERO\0", hero)

def main():
    build_legacy_css()
    pages = sorted(f for f in glob.glob(os.path.join(ROOT, "*/index.html")) if "../assets/style.css" in open(f, encoding="utf8").read())
    for f in pages:
        s = open(f, encoding="utf8").read()
        open(f, "w", encoding="utf8").write(conv_page(s))
    print(len(pages), "pages converties")

if __name__ == "__main__":
    main()
