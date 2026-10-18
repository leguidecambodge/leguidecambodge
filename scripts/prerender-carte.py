#!/usr/bin/env python3
"""
Ajoute sous la carte de carte-interactive/index.html une liste dépliable des lieux (entre <!--LIEUX-->
et <!--/LIEUX-->), générée depuis le tableau MARKERS de la page : même contenu que les fenêtres de la carte,
lisible sans JavaScript et accessible au clavier / aux lecteurs d'écran.
À relancer après toute modification de MARKERS :  python3 scripts/prerender-carte.py
"""
import html, json, os, re, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(ROOT, "carte-interactive/index.html")
s = open(p, encoding="utf8").read()
arr = re.search(r"var MARKERS = (\[.*?\n  \]);", s, re.S).group(1)
M = json.loads(subprocess.run(["node", "-e", "process.stdout.write(JSON.stringify(" + arr + "))"], capture_output=True, text=True, check=True).stdout)
TYPES = [("ville", "🏙 Villes"), ("temple", "🏯 Temples et monuments"), ("activite", "🎭 Activités"), ("plage", "🏖 Plages"),
         ("restaurant", "🍽 Restaurants"), ("hotel", "🏨 Hôtels"), ("urgence", "🚨 Urgences"), ("hopital", "🏥 Hôpitaux"),
         ("ambassade", "🏛 Ambassades et consulats")]
assert {m["type"] for m in M} <= {t for t, _ in TYPES}, "type de lieu inconnu"
parts = []
for t, label in TYPES:
    L = [m for m in M if m["type"] == t]
    if not L: continue
    lis = "".join(f'<li><b>{html.escape(m["nom"])}</b> — {m["desc"]}</li>' for m in L)  # desc : HTML de nos propres données
    parts.append(f'<h3>{label} <small>({len(L)})</small></h3><ul>{lis}</ul>')
block = ('<!--LIEUX--><details class="lieux"><summary>Voir les %d lieux de la carte sous forme de liste</summary>%s</details><!--/LIEUX-->'
         % (len(M), "".join(parts)))
css = ('<style id="lieux-css">.lieux{max-width:1100px;margin:22px auto 0;background:#fff;border:1px solid var(--line);border-radius:14px;padding:4px 20px}'
       '.lieux summary{cursor:pointer;padding:14px 0;font-weight:600;color:var(--ink)}.lieux h3{font-family:var(--serif);font-size:20px;'
       'font-weight:500;color:var(--ink);margin:18px 0 8px}.lieux h3 small{font-size:13px;color:var(--mute)}.lieux ul{list-style:none;'
       'display:grid;gap:8px;padding-bottom:6px}.lieux li{font-size:14px;color:var(--ink2);line-height:1.6;border-bottom:1px solid var(--line);'
       'padding-bottom:8px}.lieux li:last-child{border-bottom:0}.lieux b{color:var(--ink)}</style>')
if "<!--LIEUX-->" in s:
    s = re.sub(r"<!--LIEUX-->.*?<!--/LIEUX-->", lambda m: block, s, flags=re.S)
else:
    anchor = '<div id="gc-map" aria-label="Carte interactive du Cambodge" role="region"></div>'
    assert s.count(anchor) == 1
    s = s.replace(anchor, anchor + "\n  " + block, 1)
if 'id="lieux-css"' not in s:
    s = s.replace("</head>", css + "\n</head>", 1)
open(p, "w", encoding="utf8").write(s)
print(len(M), "lieux listés")
