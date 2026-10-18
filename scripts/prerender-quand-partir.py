#!/usr/bin/env python3
"""
Ajoute à quand-partir/index.html un résumé lisible des 12 mois (entre les repères
<!--MOIS--> et <!--/MOIS-->), généré depuis le tableau `months` du calendrier de la page,
pour que le contenu soit lisible sans cliquer et sans JavaScript.
À relancer après toute modification du tableau months :  python3 scripts/prerender-quand-partir.py
"""
import html, json, os, re, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(ROOT, "quand-partir/index.html")
s = open(p, encoding="utf8").read()
arr = re.search(r"const months = (\[.*?\n  \]);", s, re.S).group(1)
M = json.loads(subprocess.run(["node", "-e", "process.stdout.write(JSON.stringify(" + arr + "))"], capture_output=True, text=True, check=True).stdout)
LBL = {"ideal": "⭐ Idéal", "acceptable": "✅ Acceptable", "pluie": "🌧 Saison des pluies"}
esc = html.escape
items = "".join(
    f'<article class="qp-m qp-{m["type"]}"><h3>{esc(m["name"])} <span>{LBL[m["type"]]}</span></h3>'
    f'<p>{esc(m["desc"])}</p><p class="qp-facts">🌡 {esc(m["temp"])} · 🌧 Pluie : {esc(m["rain"].lower())} · 👥 Affluence : {esc(m["crowd"].lower())}</p></article>'
    for m in M)
block = ('<!--MOIS--><section class="qp-resume"><div class="section-header"><span class="section-label">✦ En résumé</span>'
         '<h2 class="section-title">Le Cambodge <em>mois par mois</em></h2></div>'
         f'<div class="qp-list">{items}</div></section><!--/MOIS-->')
css = ('<style id="qp-resume-css">.qp-resume{padding:20px 48px 70px}.qp-list{max-width:1100px;margin:0 auto;display:grid;'
       'grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}.qp-m{background:#fff;border:1px solid var(--line);'
       'border-left:4px solid #2A5C3F;border-radius:6px;padding:16px 18px}.qp-m.qp-acceptable{border-left-color:#7A6010}'
       '.qp-m.qp-pluie{border-left-color:#7A1B24}.qp-m h3{font-family:var(--serif);font-size:20px;font-weight:500;color:var(--ink);'
       'margin-bottom:6px}.qp-m h3 span{font-family:var(--sans);font-size:12px;color:var(--ink2);margin-left:6px}.qp-m p{font-size:15px;'
       'color:var(--ink2);line-height:1.6}.qp-facts{margin-top:8px;font-size:13px!important;color:var(--mute)!important}'
       '@media(max-width:600px){.qp-resume{padding:10px 18px 50px}}</style>')
if "<!--MOIS-->" in s:
    s = re.sub(r"<!--MOIS-->.*?<!--/MOIS-->", lambda m: block, s, flags=re.S)
else:
    anchor = '</section>\n\n\n<div class="khmer-border" aria-hidden="true"></div>'
    assert s.count(anchor) == 1, "repère introuvable"
    s = s.replace(anchor, "</section>\n" + block + '\n\n<div class="khmer-border" aria-hidden="true"></div>', 1)
if 'id="qp-resume-css"' not in s:
    s = s.replace("</head>", css + "\n</head>", 1)
open(p, "w", encoding="utf8").write(s)
print(len(M), "mois résumés")
