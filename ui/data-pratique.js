/* ===== Contenus pratiques repris de l'ancien accueil (urgences, hôpitaux, ambassades, FAQ) ===== */
const URGENCES=[["Police", "117"], ["Ambulance", "119"], ["Pompiers", "118"], ["Police Touriste", "012 942 484"]];
const HOPITAUX=[["Royal Phnom Penh Hospital", "+855 23 991 000", "Urgences 24h/24 — Phnom Penh"], ["SOS International Clinic PP", "+855 23 216 911", "Médecins expatriés · Phnom Penh"], ["Naga Medical Clinic — Siem Reap", "+855 63 964 500", "Clinique internationale · 24h/24"], ["Calmette Hospital — Phnom Penh", "+855 23 426 948", "Hôpital public · Urgences"]];
const AMBASSADES=[["🇫🇷", "Ambassade de France", "+855 23 430 020", "Urgence 24h/24 : +855 12 444 512"], ["🇩🇪", "Ambassade d'Allemagne", "+855 23 216 381", "76-78, Street 214 · Phnom Penh"], ["🇬🇧", "British Embassy", "+855 61 300 011", "Hors heures : +44 20 7008 5000"], ["🇺🇸", "U.S. Embassy", "+855 23 728 000", "#1 Street 96, Phnom Penh"], ["🇦🇺", "Australian Embassy", "+855 23 266 500", "Urgence hors heures : +61 2 6261 3305"], ["🇨🇭", "Agence Consulaire Suisse", "+855 23 218 305", "#50 Street 334, BKK1 · Phnom Penh"], ["🇧🇪", "Consulat Honoraire de Belgique", "+855 12 840 056", "N°28, Street 310 · Phnom Penh"], ["🇨🇦", "Ambassade du Canada", "+855 23 213 470", "Via Bangkok : +66 2 636 0540"], ["🇯🇵", "Ambassade du Japon", "+855 23 217 161", "#194 Street 514 · Phnom Penh"], ["🇰🇷", "Ambassade de Corée du Sud", "+855 23 211 900", "Street 214 · Phnom Penh"], ["🇳🇱", "Consulat Pays-Bas", "+855 23 981 200", "Urgence : +31 247 247 247"], ["🇨🇳", "Ambassade de Chine", "+855 23 720 920", "#256 Mao Tse Toung Blvd"]];
const NOTE_URGENCE="Souscrivez toujours une assurance voyage avant de partir · Enregistrez-vous sur Ariane (France) ou l'équivalent de votre pays.";
const FAQ=[
[
"Faut-il un visa pour aller au Cambodge ?",
"Oui, la plupart des nationalités ont besoin d'un visa. Il est disponible à l'arrivée ou via l'e-visa officiel ( evisa.gov.kh ) pour environ 35 USD, valable 30 jours. L'e-visa en ligne est plus rapide et évite les files d'attente."
],
[
"Est-il sûr de voyager au Cambodge ?",
"Le Cambodge est généralement un pays sûr pour les touristes. Les précautions habituelles s'appliquent : surveiller ses affaires, éviter les sorties nocturnes solitaires dans les zones isolées. Les zones touristiques principales sont très fréquentées et sécurisées."
],
[
"Quelle monnaie utiliser et comment payer ?",
"Le dollar américain (USD) est accepté partout. Le riel cambodgien (KHR) est utilisé pour la monnaie rendue (1 USD ≈ 4 100 KHR en 2026). Les distributeurs sont disponibles dans toutes les grandes villes. Attention : les billets froissés ou abîmés sont refusés — gardez des dollars en bon état."
],
[
"Combien coûte une entrée à Angkor Wat ?",
"Le pass Angkor coûte 37 USD pour 1 jour, 62 USD pour 3 jours, et 72 USD pour 7 jours. Il donne accès à l'ensemble du complexe archéologique. Achetez uniquement au guichet officiel."
],
[
"Comment se déplacer entre les villes cambodgiennes ?",
"Les bus longue distance sont la solution la plus économique ( Giant Ibis , Mekong Express ). Vols intérieurs Phnom Penh ↔ Siem Reap en 45 min. L'application Bookmebus permet de réserver en ligne."
],
[
"Quels vaccins sont recommandés avant de partir ?",
"Les vaccins recommandés sont : hépatites A et B, typhoïde, tétanos, diphtérie et rage (si zones reculées). La prophylaxie antipaludique est conseillée pour les régions forestières de Mondulkiri et Ratanakiri. Consultez un médecin voyagiste 4 à 6 semaines avant le départ."
],
[
"Y a-t-il du wifi et Internet au Cambodge ?",
"Oui, la couverture 4G est excellente dans toutes les grandes villes. Les cartes SIM locales (Smart, Cellcard ou Metfone) coûtent 5 à 10 USD pour 30 jours de data illimitée. Le wifi est disponible dans presque tous les hôtels et restaurants."
],
[
"Quelle tenue vestimentaire adopter aux temples ?",
"Les épaules et les genoux doivent être couverts pour visiter les temples bouddhistes et le site d'Angkor. Préférez des vêtements légers mais couvrants. Les sandales facilement détachables sont pratiques pour entrer dans les pagodes."
],
[
"Peut-on boire l'eau du robinet ?",
"Non, l'eau du robinet n'est pas potable au Cambodge. Achetez de l'eau en bouteille (0,25 USD le litre) ou utilisez un filtre type LifeStraw."
],
[
"Quelle est la meilleure ville pour débuter son voyage ?",
"Siem Reap est idéale pour débuter : aéroport international bien desservi et Angkor Wat à 20 minutes. Pour une immersion directe dans la culture khmère contemporaine, commencez par Phnom Penh."
],
[
"Combien de jours faut-il pour bien visiter le Cambodge ?",
"Un minimum de 10 jours est recommandé : 3 jours à Siem Reap/Angkor, 2 jours à Phnom Penh, 2 jours à Kampot/Kep, 2 jours sur une île. Pour un voyage complet incluant Battambang et Mondulkiri, comptez 3 semaines."
],
[
"Les pourboires sont-ils obligatoires ?",
"Non obligatoires mais très appréciés. Convention : 1–2 USD pour un tuk-tuk, 5–10 % au restaurant, 5 USD pour un guide privé à la journée."
],
[
"Y a-t-il des zones à éviter au Cambodge ?",
"Les zones rurales frontalières avec la Thaïlande (mines antipersonnel non encore déminées) nécessitent une vigilance — restez sur les chemins balisés. Dans les grandes villes, la prudence habituelle suffit."
],
[
"Comment éviter les arnaques touristiques ?",
"Arnaques courantes : le \"temple fermé aujourd'hui\" (toujours vérifier directement), les tuk-tuk qui emmènent chez leurs amis commerçants, et les faux billets pour Angkor. Utilisez Grab pour les trajets en ville."
],
[
"Peut-on louer un scooter sans permis ?",
"Techniquement un permis international est requis, mais les loueurs dans les zones touristiques ne le demandent pas. Roulez prudemment, portez toujours un casque et vérifiez que votre assurance couvre les accidents de moto."
],
[
"Quelle application télécharger avant de partir ?",
"Indispensables : Grab , PassApp , NHAM24 , Foodpanda , Vet Express , Bookmebus , Google Maps offline , XE Currency ."
],
[
"Les plages cambodgiennes valent-elles le détour ?",
"Oui, les îles du golfe de Thaïlande sont magnifiques. Koh Rong Sanloem est la plus préservée avec ses eaux cristallines et son plancton bioluminescent. Koh Rong est plus festive."
],
[
"Le Cambodge est-il adapté aux végétariens/végans ?",
"Oui, surtout dans les grandes villes. Dans les restaurants locaux, indiquez \"mein sach\" (sans viande) — attention, les bouillons contiennent souvent du poisson fermenté (prahok)."
],
[
"Quels souvenirs rapporter du Cambodge ?",
"Les meilleurs souvenirs : poivre de Kampot (IGP), soie khmère tissée à la main, kramar (écharpe khmère), café cambodgien. Évitez les antiquités — l'export est interdit."
]
];
