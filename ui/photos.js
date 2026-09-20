/* ===== PHOTOS DU SITE =====
   Pour ajouter une photo à une province : dossier `photos/` + une entrée ci-dessous.
   card = vignette des cartes · hero = grand bandeau de la fiche · gal = 2 photos de galerie
   pos  = point focal (ex. "50% 40%") · fit:1 = photo entière sur fond brun (Battambang, Kampot : rendu validé)
   Les provinces sans entrée gardent une scène illustrée en attendant une photo. */
const P = n => "photos/" + encodeURIComponent(n) + ".webp";
const WM = "https://upload.wikimedia.org/wikipedia/commons/";
const PH = {
  home: {src:P("angkor 8"), pos:"50% 65%"},
  "siem-reap": {card:{src:P("angkor 8"),pos:"50% 60%"}, hero:{src:P("siem reap 2"),pos:"50% 55%"}, gal:[{src:P("angkor 7"),pos:"50% 60%"},{src:P("siem reap 6"),pos:"60% 40%"}]},
  "phnom-penh": {card:{src:P("phnom penh 4"),pos:"50% 50%"}, gal:[{src:P("phnom penh 3"),pos:"50% 35%"},{src:P("phnom penh 1"),pos:"50% 50%"}]},
  "kampot": {card:{src:P("kampot 1"),fit:1}, gal:[{src:P("kampot 1"),fit:1}]},
  "battambang": {card:{src:P("battambang 4"),fit:1}, gal:[{src:P("battambang 4"),fit:1}]},
  "sihanoukville": {card:{src:P("koh rong 4"),pos:"78% 50%"}, hero:{src:P("koh rong 4"),pos:"50% 65%"}, gal:[{src:P("koh rong 16"),pos:"50% 55%"},{src:P("koh rong 6"),pos:"50% 50%"}]},
  /* photos déjà utilisées sur l'ancien site (Wikimedia Commons) */
  "mondulkiri": {card:{src:WM+"thumb/e/ea/Mondul_Kiri_Cambodia_3048.jpg/1280px-Mondul_Kiri_Cambodia_3048.jpg",pos:"50% 50%",credit:"Wikimedia Commons"}},
  "pursat": {card:{src:WM+"thumb/6/69/Pursat_Skyline.jpg/1280px-Pursat_Skyline.jpg",pos:"50% 50%",credit:"Wikimedia Commons"}}
};
