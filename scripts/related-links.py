#!/usr/bin/env python3
"""
Bloc « À lire aussi » des pages guides : 6 liens choisis selon le sujet de chaque page
(villes voisines, provinces de la même région, thèmes utiles) au lieu des 4 mêmes liens partout.
Améliore le maillage interne (SEO) et la navigation.

Le script remplace la grille de liens de la section « À lire aussi » de chaque page listée
dans RELATED. Les pages provinces (scripts/build-provinces.py) ne sont pas concernées.

À relancer après une modification de RELATED :  python3 scripts/related-links.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# page : (emoji, titre, sous-titre)
CAT = {
    "siem-reap": ("🏯", "Siem Reap", "Angkor, quartiers, restaurants"),
    "angkor-wat": ("🛕", "Angkor Wat", "Billets, horaires, itinéraires"),
    "angkor": ("🗿", "Temples d'Angkor", "Bayon, Ta Prohm, Banteay Srei"),
    "phnom-penh": ("🏙️", "Phnom Penh", "Palais royal, Tuol Sleng, quartiers"),
    "kampot": ("🌶️", "Kampot", "Poivre, Bokor, rivière"),
    "kep": ("🦀", "Kep", "Marché aux crabes, hôtels"),
    "battambang": ("🎋", "Battambang", "Train de bambou, cirque, temples"),
    "koh-rong": ("🏝️", "Koh Rong", "Plages et plancton lumineux"),
    "koh-rong-sanloem": ("🐠", "Koh Rong Sanloem", "L'île calme, Saracen Bay"),
    "sihanoukville": ("⛴️", "Sihanoukville", "Plages et départ vers les îles"),
    "mondulkiri": ("🐘", "Mondulkiri", "Éléphants, cascades, forêts"),
    "pursat": ("🪨", "Pursat", "Cardamomes et villages flottants"),
    "poipet": ("🛂", "Poipet", "Frontière avec la Thaïlande"),
    "kratie": ("🐬", "Kratie", "Dauphins du Mékong"),
    "ratanakiri": ("🌋", "Ratanakiri", "Lac de cratère et jungle"),
    "koh-kong": ("🌿", "Koh Kong", "Mangroves et Cardamomes"),
    "preah-vihear": ("⛰️", "Preah Vihear", "Koh Ker et temples du nord"),
    "kampong-thom": ("🏛️", "Kampong Thom", "Sambor Prei Kuk (UNESCO)"),
    "takeo": ("🌾", "Takeo", "Berceau du Funan, Phnom Da"),
    "kandal": ("🛶", "Kandal", "Autour de Phnom Penh"),
    "kampong-cham": ("🌉", "Kampong Cham", "Mékong et île de bambou"),
    "banteay-meanchey": ("🗿", "Banteay Meanchey", "Banteay Chhmar"),
    "itineraire-cambodge": ("🗺️", "Itinéraires", "7, 14 ou 21 jours"),
    "transports": ("🚌", "Transports", "Bus, bateau, avion, tuk-tuk"),
    "budget-voyage-cambodge": ("💰", "Budget", "Combien coûte un voyage"),
    "meilleure-periode-cambodge": ("☀️", "Meilleure période", "Saison sèche ou mousson"),
    "quand-partir": ("📅", "Quand partir", "Météo mois par mois"),
    "visa-cambodge": ("🛂", "Visa", "E-visa officiel et arrivée"),
    "hotels": ("🏨", "Où dormir", "Hôtels ville par ville"),
    "quartiers": ("🏘️", "Quartiers", "Où loger dans chaque ville"),
    "scooters": ("🛵", "Louer un scooter", "Prix, loueurs, sécurité"),
    "vols": ("✈️", "Vols", "Rejoindre le Cambodge"),
    "guide-pratique-cambodge": ("🧭", "Guide pratique", "Santé, argent, internet"),
    "cuisine-khmere": ("🍜", "Cuisine khmère", "Les plats à goûter"),
    "histoire-cambodge": ("📜", "Histoire du Cambodge", "Du Funan aux Khmers rouges"),
    "lexique-khmer": ("🗣️", "Lexique khmer", "Les mots utiles"),
    "activites": ("🎟️", "Activités", "Excursions et expériences"),
    "bons-plans": ("💡", "Bons plans", "Street food, happy hours, astuces"),
    "evenements": ("🎉", "Événements", "Fêtes et festivals 2026"),
    "carte-interactive": ("📍", "Carte interactive", "Tous les lieux sur la carte"),
    "photos-videos": ("📸", "Photos et vidéos", "Le Cambodge en images"),
    "blog": ("✍️", "Blog", "Conseils et récits"),
}

RELATED = {
    "siem-reap": ["angkor-wat", "angkor", "battambang", "kampong-thom", "preah-vihear", "scooters"],
    "angkor-wat": ["siem-reap", "angkor", "kampong-thom", "preah-vihear", "histoire-cambodge", "meilleure-periode-cambodge"],
    "angkor": ["angkor-wat", "siem-reap", "preah-vihear", "banteay-meanchey", "kampong-thom", "histoire-cambodge"],
    "phnom-penh": ["kandal", "takeo", "kampong-cham", "kampot", "histoire-cambodge", "transports"],
    "kampot": ["kep", "takeo", "phnom-penh", "sihanoukville", "scooters", "cuisine-khmere"],
    "kep": ["kampot", "takeo", "sihanoukville", "koh-rong", "hotels", "cuisine-khmere"],
    "battambang": ["siem-reap", "pursat", "banteay-meanchey", "poipet", "scooters", "transports"],
    "koh-rong": ["koh-rong-sanloem", "sihanoukville", "kep", "koh-kong", "meilleure-periode-cambodge", "transports"],
    "koh-rong-sanloem": ["koh-rong", "sihanoukville", "kampot", "koh-kong", "activites", "transports"],
    "sihanoukville": ["koh-rong", "koh-rong-sanloem", "kampot", "koh-kong", "scooters", "transports"],
    "mondulkiri": ["ratanakiri", "kratie", "kampong-cham", "phnom-penh", "scooters", "activites"],
    "pursat": ["battambang", "koh-kong", "phnom-penh", "kampong-thom", "transports", "itineraire-cambodge"],
    "poipet": ["battambang", "banteay-meanchey", "siem-reap", "visa-cambodge", "transports", "itineraire-cambodge"],
    "scooters": ["kampot", "siem-reap", "mondulkiri", "battambang", "guide-pratique-cambodge", "transports"],
    "transports": ["scooters", "vols", "koh-rong", "battambang", "itineraire-cambodge", "visa-cambodge"],
    "hotels": ["quartiers", "siem-reap", "phnom-penh", "kampot", "kep", "budget-voyage-cambodge"],
    "quartiers": ["hotels", "siem-reap", "phnom-penh", "battambang", "kampot", "sihanoukville"],
    "itineraire-cambodge": ["siem-reap", "phnom-penh", "kampot", "koh-rong", "transports", "meilleure-periode-cambodge"],
    "budget-voyage-cambodge": ["hotels", "bons-plans", "transports", "visa-cambodge", "vols", "guide-pratique-cambodge"],
    "meilleure-periode-cambodge": ["quand-partir", "evenements", "angkor-wat", "koh-rong", "itineraire-cambodge", "budget-voyage-cambodge"],
    "quand-partir": ["meilleure-periode-cambodge", "evenements", "koh-rong", "mondulkiri", "itineraire-cambodge", "visa-cambodge"],
    "visa-cambodge": ["vols", "poipet", "guide-pratique-cambodge", "budget-voyage-cambodge", "transports", "lexique-khmer"],
    "vols": ["visa-cambodge", "transports", "phnom-penh", "siem-reap", "budget-voyage-cambodge", "itineraire-cambodge"],
    "guide-pratique-cambodge": ["visa-cambodge", "budget-voyage-cambodge", "lexique-khmer", "scooters", "transports", "cuisine-khmere"],
    "cuisine-khmere": ["bons-plans", "kampot", "kep", "siem-reap", "phnom-penh", "lexique-khmer"],
    "histoire-cambodge": ["angkor", "angkor-wat", "phnom-penh", "takeo", "kampong-thom", "banteay-meanchey"],
    "lexique-khmer": ["cuisine-khmere", "guide-pratique-cambodge", "histoire-cambodge", "bons-plans", "visa-cambodge", "evenements"],
    "activites": ["koh-rong", "kratie", "mondulkiri", "battambang", "siem-reap", "kampot"],
    "bons-plans": ["cuisine-khmere", "budget-voyage-cambodge", "kep", "kratie", "koh-rong-sanloem", "scooters"],
    "evenements": ["meilleure-periode-cambodge", "phnom-penh", "siem-reap", "histoire-cambodge", "kampot", "quand-partir"],
    "carte-interactive": ["itineraire-cambodge", "siem-reap", "kampot", "mondulkiri", "kratie", "koh-kong"],
    "photos-videos": ["koh-rong", "angkor-wat", "battambang", "kampot", "phnom-penh", "carte-interactive"],
    "blog": ["itineraire-cambodge", "angkor-wat", "cuisine-khmere", "koh-rong", "kep", "visa-cambodge"],
}

CARD = ('    <a href="../{p}/" style="display:block;padding:24px;background:#FFFFFF;border:1px solid rgba(212,150,26,.2);'
        'text-decoration:none;transition:all .3s" class="hover-card">\n'
        '      <div style="font-size:1.8rem;margin-bottom:10px">{e}</div>\n'
        '      <div style="font-family:var(--serif);font-size:.85rem;color:var(--ink);margin-bottom:6px">{t}</div>\n'
        '      <div style="font-size:.8rem;color:var(--ink2)">{d}</div>\n'
        '    </a>')
GRID_OPEN = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px;max-width:960px;margin:0 auto" class="fade-in">'

def main():
    done = 0
    for page, targets in RELATED.items():
        assert page not in targets, page
        for t in targets:
            assert t in CAT and os.path.exists(os.path.join(ROOT, t, "index.html")), (page, t)
        f = os.path.join(ROOT, page, "index.html")
        s = open(f, encoding="utf8").read()
        m = re.search(r'✦ (?:À lire aussi|Continuer votre préparation)</span>', s)
        assert m, f"bloc « À lire aussi » introuvable : {page}"
        g = s.find(GRID_OPEN, m.end())
        assert g > 0 and g - m.end() < 600, f"grille introuvable : {page}"
        end = s.find("\n  </div>\n</section>", g)
        assert end > 0, page
        cards = "\n".join(CARD.format(p=t, e=CAT[t][0], t=CAT[t][1], d=CAT[t][2]) for t in targets)
        s = s[:g] + GRID_OPEN + "\n" + cards + s[end:]
        open(f, "w", encoding="utf8").write(s)
        done += 1
    print(done, "pages mises à jour")

if __name__ == "__main__":
    main()
