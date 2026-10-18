#!/usr/bin/env python3
"""
Écrit les bons plans directement dans bons-plans/index.html (dans <div id="bp-grid">), à partir du
tableau BP du script de la page : les robots qui n'exécutent pas JavaScript lisent ainsi le même
contenu que les visiteurs. Le script de la page vide la grille et la redessine au chargement.
À relancer après toute modification du tableau BP :  python3 scripts/prerender-bons-plans.py
"""
import html, json, os, re, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(ROOT, "bons-plans/index.html")
s = open(p, encoding="utf8").read()
arr = re.search(r"var BP = (\[.*?\n  \]);", s, re.S).group(1)
BP = json.loads(subprocess.run(["node", "-e", "process.stdout.write(JSON.stringify(" + arr + "))"], capture_output=True, text=True, check=True).stdout)
esc = html.escape
cards = "".join(
    '<article style="background:#fff;border:1px solid var(--line);border-radius:4px;padding:20px 22px">'
    f'<h3 style="font-family:var(--serif);font-size:1rem;color:var(--lacq);margin-bottom:3px">{b["emoji"]} {esc(b["titre"])}</h3>'
    f'<p style="font-size:.75rem;color:var(--ink2);margin-bottom:8px">📍 {esc(b["ville"])} · {esc(b["badge"])}</p>'
    f'<p style="font-size:.85rem;color:var(--ink2);line-height:1.6">{esc(html.unescape(b["desc"]))}</p></article>'
    for b in BP)
s2, n = re.subn(r'(<div id="bp-grid"[^>]*>).*?(</div>\n)', lambda m: m.group(1) + cards + m.group(2), s, count=1, flags=re.S)
assert n == 1
open(p, "w", encoding="utf8").write(s2)
print(len(BP), "bons plans écrits dans la page")
