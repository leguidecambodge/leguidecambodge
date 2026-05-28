/* Données des villes — généré automatiquement */
var CITIES = {
  'siem-reap': {
    nom: 'Siem Reap',
      emoji: '🛕',
      tagline: 'Capitale archéologique du monde, porte d\'entrée d\'Angkor',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Angkor_Wat_at_sunset.JPG/1280px-Angkor_Wat_at_sunset.JPG',
      budget: '35–60 $/jour', duree: '3–5 jours', distance: '314 km de PP', meilleureMoment: 'Nov–Fév',
      desc: 'Siem Reap était un simple village de pêcheurs sur les rives du Tonlé Sap lorsque les premiers explorateurs européens découvrirent les ruines oubliées d\'Angkor au XIXe siècle. Son nom signifie littéralement « défaite du Siam » en référence aux guerres khmères contre les Thaïlandais. Aujourd\'hui, la ville s\'est transformée en capitale du tourisme cambodgien sans perdre son âme : ruelles coloniales françaises, marchés nocturnes animés, monastères bouddhistes actifs et artisans locaux côtoient hôtels boutiques et restaurants gastronomiques. La proximité immédiate du site d\'Angkor — l\'un des plus grands complexes religieux jamais bâtis — fait de Siem Reap un passage incontournable de tout voyage au Cambodge.',
      visites: [
        {nom: 'Angkor Wat', sub: 'Temple-montagne du XIIe siècle · Lever de soleil magique · 2–3h de visite'},
        {nom: 'Angkor Thom & le Bayon', sub: 'Cité royale aux 216 visages de pierre souriants · Terrasse des Éléphants'},
        {nom: 'Ta Prohm', sub: 'Temple recouvert de fromagers géants · Lieu de tournage de Tomb Raider'},
        {nom: 'Marché nocturne Pub Street', sub: 'Artisanat, cuisine de rue, spectacles Apsara dès 18h'}
      ],
      activites: [
        {nom: 'Lever de soleil à Angkor Wat', sub: 'Départ 5h · Reflet dans les bassins · Moment inoubliable · Billet pass 3 jours recommandé'},
        {nom: 'Village flottant du Tonlé Sap', sub: 'Balade en bateau · Plus grand lac d\'Asie du Sud-Est · ~15 USD/pers'},
        {nom: 'Cours de cuisine khmère', sub: 'Marché + recettes traditionnelles · Amok, lok lak, samlor korkor · ~20–30 USD'},
        {nom: 'Spectacle de danse Apsara', sub: 'Danse classique khmère · Costumes or et vert · Tous les soirs dès 19h · ~15–25 USD'}
      ],
      restaurants: [
        {emoji:'🍽', nom:'Cuisine Wat Damnak', badge:'Gastronomie Khmère ⭐⭐⭐', adresse:'Street 7 Makara, Siem Reap', prix:'~35 USD/pers', horaires:'Mar–Sam · 18h30–21h30', desc:'La table de référence du Cambodge. Menu dégustation 5 plats en harmonie avec les saisons et les producteurs locaux. Réservation obligatoire.'},
        {emoji:'🍲', nom:'Mahob Restaurant', badge:'Cuisine Traditionnelle ⭐⭐', adresse:'Vieille ville, près Pub Street', prix:'8–14 USD/plat', horaires:'Tous les jours · 11h–22h', desc:'Bœuf lok lak, amok de poisson en cocotte de coco, curry rouge maison. Décor élégant dans une villa coloniale restaurée.'},
        {emoji:'🫙', nom:'Haven Restaurant', badge:'Social Enterprise ⭐⭐', adresse:'Phum Treang, Siem Reap', prix:'6–10 USD/plat', horaires:'Lun–Sam · 11h–21h', desc:'Restaurant-école formant des jeunes défavorisés. Amok signature, samlor korkor, currys. Cuisine authentique et engagée.'},
        {emoji:'🔥', nom:'Khmer BBQ — Night Market', badge:'Street Food Khmère ⭐', adresse:'Night Market, Pub Street area', prix:'5–10 USD/pers', horaires:'Tous les jours · 17h–23h', desc:'Brochettes de viandes et fruits de mer sur charbon. Ambiance animée, tables en plein air, bières Angkor fraîches.'},
        {emoji:'🌶️', nom:'Sambo — Khmer & Thai Cuisine', badge:'Nouveauté 2026 ⭐⭐', adresse:'Quartier Wat Damnak, Siem Reap', prix:'3–7 USD/plat', horaires:'Tous les jours · 11h–22h', desc:'Adresse tendance 2026 tenue par une cheffe khmère combinant techniques locales et touches d\'Asie du Sud-Est. Amok de poisson revisité et options végétariennes haut de gamme à petit prix.'}
      ],
      evenements: [
        {date:'Avr\n13–16', nom:'Khmer New Year (Chaul Chnam Thmey)', desc:'Nouvel An khmer : célébrations dans les temples d\'Angkor, jeux d\'eau traditionnels, danses et offrandes. L\'événement le plus festif de l\'année au Cambodge.'},
        {date:'Nov', nom:'Festival des Lumières (Bon Om Touk)', desc:'Course de pirogues sur le Tonlé Sap, spectacle de feux d\'artifice, lanternes flottantes. Des dizaines de milliers de spectateurs.'},
        {date:'Nov', nom:'Angkor Photo Festival', desc:'Festival international de photographie dans les rues de Siem Reap. Expositions en plein air, workshops avec des photographes du monde entier.'},
        {date:'Déc', nom:'Giant Puppet Parade', desc:'Défilé de marionnettes géantes représentant des divinités khmères, dans les rues du centre-ville. Spectacle gratuit et coloré.'}
      ],
      loisirs: [
        {icon:'🎭', nom:'Spectacle de Cirque Phare', sub:'Compagnie Phare Cambodian Circus · Jonglage, acrobaties, histoires khmères · ~20–38 USD · Soir'},
        {icon:'🎯', nom:'Escape Room Siem Reap', sub:'4 scénarios sur le thème d\'Angkor · 2h · 12–15 USD/pers · Centre-ville'},
        {icon:'🏊', nom:'Piscine d\'hôtel à la journée', sub:'Plusieurs grands hôtels proposent l\'accès pour les non-résidents · ~10–20 USD'},
        {icon:'🛍', nom:'Old Market & Artisans d\'Angkor', sub:'Soieries, sculptures, laques · Boutique solidaire des artisans locaux · Centre-ville'}
      ],
      scooters: [
        {nom:'Lucky Lucky Moto Rental', adresse:'Street 7, près Old Market', tel:'+855 12 943 040', prix:'6', note:'Scooter automatique · Casque inclus', lien:'https://wa.me/85512943040'},
        {nom:'Angkor Moto Rental', adresse:'Sivatha Boulevard, centre-ville', tel:'+855 96 511 2222', prix:'7', note:'Semi-automatique disponible · Carte de la région offerte', lien:'https://wa.me/855965112222'},
        {nom:'Happy Scooter Rental', adresse:'Pub Street area', tel:'+855 77 560 099', prix:'5–7', note:'Tarif dégressif à la semaine · Ouvert 7j/7 dès 7h', lien:'https://wa.me/85577560099'}
      ],
      coutumes: [
        {icon:'🙏', txt:'<strong>Tenue correcte dans les temples</strong> : épaules et genoux couverts. Des sarongs sont proposés à l\'entrée d\'Angkor si besoin.'},
        {icon:'📸', txt:'<strong>Respectez les moines</strong> : ne touchez jamais un moine, ne les photographiez pas sans permission. Gardez vos distances dans les pagodes.'},
        {icon:'💵', txt:'<strong>Pourboire</strong> : 1–2 USD après un circuit ou un massage est bienvenu. Le salaire minimum cambodgien reste très bas.'},
        {icon:'🕐', txt:'<strong>Horaires des temples</strong> : Angkor ouvre à 5h (pour le lever de soleil). Fermé aux non-résidents après 17h30. Planifiez en conséquence.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus Giant Ibis depuis Phnom Penh', detail:'6h · Confort premium · ~12 USD · Départ 7h ou 7h30'},
        {icon:'✈️', main:'Vol intérieur Phnom Penh → Siem Reap', detail:'45 min · Cambodia Angkor Air · 50–90 USD'},
        {icon:'🛥️', main:'Bateau rapide depuis Phnom Penh', detail:'5–6h · Longe le Tonlé Sap · Saisonnier · ~35 USD'},
        {icon:'🚕', main:'Taxi privé / Grab', detail:'Phnom Penh → Siem Reap 4h30 · ~50–60 USD partagé'}
      ]
    },
    'phnom-penh': {
      nom: 'Phnom Penh',
      emoji: '🏛️',
      tagline: 'Capitale du Cambodge, carrefour entre histoire tragique et renaissance',
      bg: 'linear-gradient(135deg, #1a0800 0%, #7a3510 40%, #2e1200 100%)',
      budget: '30–50 $/jour', duree: '2–3 jours', distance: 'Capitale (point de départ)', meilleureMoment: 'Nov–Mar',
      desc: 'Fondée au XVe siècle, Phnom Penh fut la capitale du puissant Empire Khmer avant de tomber sous domination française en 1867. Elle devint alors la « Perle de l\'Asie » avec ses avenues larges bordées de manguiers, ses villas coloniales et ses marchés animés. La tragédie du régime Khmer Rouge (1975–1979) vida la ville de sa population du jour au lendemain. Aujourd\'hui, Phnom Penh est une métropole de 2 millions d\'habitants qui s\'est totalement reconstruite : Palais Royal doré, Musée National, marchés légendaires et vie nocturne animée font de la capitale un premier contact électrisant avec le Cambodge.',
      visites: [
        {nom: 'Palais Royal & Pagode d\'Argent', sub: 'Résidence officielle du roi · Sol en argent massif (5000 carreaux) · Tenue couverte obligatoire'},
        {nom: 'Musée Tuol Sleng (S-21)', sub: 'Prison des Khmers Rouges · Mémorial poignant · Comprendre l\'histoire pour mieux avancer'},
        {nom: 'Musée National du Cambodge', sub: 'Plus belle collection de sculpture khmère au monde · Bâtiment en bois rouge splendide'},
        {nom: 'Marché Russe (Phsar Toul Tom Poung)', sub: 'Artisanat, soieries, épices, antiquités · Marchandage de rigueur'}
      ],
      activites: [
        {nom:'Balade sur Sisowath Quay (bord du Mékong)', sub:'Restaurants, cafés et coucher de soleil sur les 2 fleuves · Idéal le soir'},
        {nom:'Visite des Killing Fields de Choeung Ek', sub:'15 km de PP · Audioguide inclus · ~6 USD · Mémorial émouvant et essentiel'},
        {nom:'Cours de cuisine khmère', sub:'Marché Central + 3 plats traditionnels · ~25–35 USD · Plusieurs opérateurs'},
        {nom:'Tuk-tuk nocturne dans BKK1', sub:'Restaurants branchés, galeries d\'art, rooftop bars · Ambiance cosmopolite'}
      ],
      restaurants: [
        {emoji:'🌿', nom:'Romdeng', badge:'Cuisine Khmère Régionale ⭐⭐⭐', adresse:'Street 278, BKK1, Phnom Penh', prix:'10–18 USD/plat', horaires:'Lun–Sam · 11h–21h', desc:'Spécialités régionales rares dans une villa coloniale magnifique. Araignées frites, anguilles, grenouilles au basilic. Projet social formant d\'anciens enfants des rues.'},
        {emoji:'🍜', nom:'Friends Restaurant (Mith Samlanh)', badge:'Social Enterprise ⭐⭐', adresse:'Street 13, Riverside, Phnom Penh', prix:'6–12 USD/plat', horaires:'Tous les jours · 11h–21h30', desc:'Tapas khmères inventives et plats traditionnels revisités. Cadre colonial, service par d\'anciens jeunes de la rue. L\'une des meilleures adresses de la ville.'},
        {emoji:'🏛', nom:'Embassy Restaurant', badge:'Cuisine Authentique ⭐⭐', adresse:'Tonle Bassac Quarter, Phnom Penh', prix:'7–13 USD/plat', horaires:'Tous les jours · 12h–22h', desc:'Amok à la coco, samlor m\'chu, bœuf au poivre kampot. Décor traditionnel khmer, musique live le week-end.'},
        {emoji:'🫕', nom:'Khmer Surin Restaurant', badge:'Famille & Tradition ⭐', adresse:'Preah Sihanouk Blvd, Phnom Penh', prix:'5–9 USD/plat', horaires:'Tous les jours · 10h–22h', desc:'Cuisine familiale khmère sans fioriture. Porc sauté au gingembre, soupe de banane verte, riz gluant à la mangue. Prix locaux.'}
      ],
      evenements: [
        {date:'Nov', nom:'Bon Om Touk — Festival des Eaux', desc:'3 jours de fête nationale. Course de pirogues sur le Tonlé Sap et le Mékong devant le Palais Royal. Des centaines de milliers de visiteurs. Feux d\'artifice chaque soir.'},
        {date:'Oct', nom:'Pchum Ben — Fête des Morts', desc:'15 jours de prières pour les ancêtres dans les pagodes de toute la ville. Les Cambodgiens rentrent dans leurs villages. Ambiance recueillie, offrandes de nourriture.'},
        {date:'Avr\n13–16', nom:'Khmer New Year — Fête nationale', desc:'Trois jours fériés avec jeux d\'eau, danses khmères et cérémonies dans les temples. La ville se vide le matin et se remplit de fêtards le soir.'},
        {date:'Déc', nom:'Festival International du Film de Phnom Penh', desc:'Projection de films asiatiques, documentaires et films indépendants dans plusieurs cinémas de la capitale. Rencontres avec réalisateurs.'}
      ],
      loisirs: [
        {icon:'🎳', nom:'Bowling Olympic (Aeon Mall 1)', sub:'Pistes de bowling · Arcade · Restauration · 5–8 USD/partie · Central'},
        {icon:'🎬', nom:'Cinéma Flicks (Chroy Changvar)', sub:'Films indépendants et documentaires · Ambiance bar · 4 USD/séance'},
        {icon:'🏝', nom:'Diamond Island (Koh Pich)', sub:'Parc de loisirs, restaurants, vue sur les fleuves · Idéal le soir et week-end'},
        {icon:'🍹', nom:'Rooftop Bars du Riverside', sub:'FCC, Elephant Bar, Sky Bar · Happy hour 17h–19h · Vue sur le Mékong'}
      ],
      scooters: [
        {nom:'Vichea Moto Rental', adresse:'BKK1 area, Phnom Penh', tel:'+855 78 888 456', prix:'6', note:'Automatique · Livraison à l\'hôtel possible', lien:'https://wa.me/85578888456'},
        {nom:'Lucky! Lucky! Moto', adresse:'Daun Penh, Phnom Penh', tel:'+855 12 474 374', prix:'6–7', note:'Semi-auto et automatique · Casque offert', lien:'https://wa.me/85512474374'},
        {nom:'PP Scooter Rental', adresse:'Riverside Quay, Phnom Penh', tel:'+855 96 200 1234', prix:'7–8', note:'Location à la demi-journée disponible', lien:'https://wa.me/855962001234'}
      ],
      coutumes: [
        {icon:'🤝', txt:'<strong>Salutation Sampeah</strong> : joindre les mains devant la poitrine et incliner la tête. Plus les mains sont hautes, plus on marque du respect.'},
        {icon:'👴', txt:'<strong>Respect des anciens</strong> : céder sa place, laisser les personnes âgées manger en premier. Ne jamais hausser la voix en public.'},
        {icon:'🍚', txt:'<strong>Repas partagés</strong> : au restaurant khmer, tous les plats arrivent ensemble et se partagent. Attendez que tout le monde soit servi.'},
        {icon:'🕌', txt:'<strong>Dans les pagodes</strong> : chaussures retirées, tenue couverte, parler doucement. Ne jamais pointer les pieds vers un Bouddha.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus depuis Siem Reap', detail:'6h · Giant Ibis ou Mekong Express · 10–13 USD · Départs toute la journée'},
        {icon:'🚌', main:'Bus depuis Kampot', detail:'2h30–3h · 5–8 USD · Virak Buntham, Mekong Express'},
        {icon:'✈️', main:'Aéroport International (PNH)', detail:'Liaisons Paris via Doha, Bangkok ou KL · Tuk-tuk aéroport → centre ~8 USD'},
        {icon:'🛥️', main:'Bateau depuis Siem Reap', detail:'5–6h · Route pittoresque Tonlé Sap · Saisonnier · ~35 USD'}
      ]
    },
    'battambang': {
      nom: 'Battambang',
      emoji: '🎨',
      tagline: 'Capitale artistique du Cambodge, atmosphère authentique hors des sentiers battus',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Aerial_view_of_Battambang_city.jpg/1280px-Aerial_view_of_Battambang_city.jpg',
      budget: '20–35 $/jour', duree: '2–3 jours', distance: '293 km de PP (bus 5h)', meilleureMoment: 'Nov–Mar',
      desc: 'Battambang est la deuxième ville du Cambodge, mais elle vit à un rythme radicalement différent de la capitale. Son nom, qui signifie « perte du bâton magique » en référence à une légende locale, est aussi mystérieux que la ville elle-même. D\'abord cité khmère médiévale, elle fut sous domination thaïlandaise pendant plus d\'un siècle avant d\'être restituée au Cambodge en 1907. Les Français y laissèrent une empreinte architecturale remarquable : immeubles coloniaux jaunes et blancs, villas en bord de rivière, pont de pierre. Aujourd\'hui, Battambang est reconnue comme le centre de la créativité cambodgienne : ateliers d\'artistes, compagnies de cirque social, galeries, et ce fameux train de bambou (« norry ») qui ne ressemble à rien d\'autre dans le monde.',
      visites: [
        {nom: 'Train de bambou (Norry)', sub: 'Plateforme en bambou sur rails désaffectés · Vitesse surprenante · ~5 USD/pers'},
        {nom: 'Phare Ponleu Selpak', sub: 'École de cirque sociale fondée après les Khmers Rouges · Spectacles le soir · Entrée libre'},
        {nom: 'Bat Cave (Grotte aux chauves-souris)', sub: 'Chaque soir au coucher du soleil : 3 millions de chauves-souris sortent en spirale · Spectacle unique'},
        {nom: 'Architecture coloniale française', sub: 'Centre-ville : hôtel de ville, marché couvert, villas en bord de Sangker River'}
      ],
      activites: [
        {nom:'Balade à vélo dans les villages rizicoles', sub:'Guides locaux dès 6 USD · Campagne authentique · Récolte oct–jan · Demi-journée'},
        {nom:'Temples de Phnom Banan', sub:'25 km de Battambang · 358 marches · Vue panoramique sur les rizières'},
        {nom:'Cours de cuisine khmer chez l\'habitant', sub:'Marché Psar Nat + 3 plats khmers typiques · ~15 USD · 3h'},
        {nom:'Coucher de soleil sur le fleuve Sangker', sub:'Terrasses de bar en bord de rivière · Bières artisanales locales · Atmosphère paisible'}
      ],
      restaurants: [
        {emoji:'🌱', nom:'Jaan Bai', badge:'Cuisine Khmère Raffinée ⭐⭐⭐', adresse:'Street 2, Old Market, Battambang', prix:'5–9 USD/plat', horaires:'Mar–Dim · 10h–21h', desc:'Restaurant social formant des jeunes défavorisés. Cuisine traditionnelle khmère revisitée avec soin : amok de crevettes, soupe lemon grass, desserts coconut. L\'adresse incontournable de Battambang.'},
        {emoji:'🏡', nom:'Riverside Balcony Bar', badge:'Vue Rivière ⭐⭐', adresse:'Bord du fleuve Sangker, Battambang', prix:'6–10 USD/plat', horaires:'Tous les jours · 11h–23h', desc:'Vue directe sur la rivière. Amok de poisson, lok lak bœuf, bières Angkor. Terrasse parfaite pour le coucher de soleil.'},
        {emoji:'🥢', nom:'Smokin\' Pot', badge:'Cuisine Locale ⭐', adresse:'Street 1.5, Battambang', prix:'4–8 USD/plat', horaires:'Lun–Sam · 12h–21h', desc:'Petit restaurant tenu par une famille khmer. Sauces à base d\'herbes fraîches, curry maison au tamarin. Menu du jour à 4 USD.'},
        {emoji:'🍵', nom:'White Rose Restaurant', badge:'Spécialités du Nord ⭐', adresse:'Central Market area, Battambang', prix:'3–6 USD/plat', horaires:'Tous les jours · 6h30–21h', desc:'Cuisine de Battambang : soupe de canard, gâteaux de riz vapeur, pâtes de riz fraîches au marché du matin.'}
      ],
      evenements: [
        {date:'Mars', nom:'Festival du Train de Bambou', desc:'Courses de norrys (trains de bambou) sur les voies ferrées entre Battambang et les villages voisins. Musique traditionnelle, artisanat local, repas communautaires.'},
        {date:'Oct–Nov', nom:'Festival du Vin de Palme', desc:'Célébration de la récolte du sucre de palme dans les villages environnants. Dégustation, visite des palmiers, artisanat villageois.'},
        {date:'Nov', nom:'Bon Om Touk local', desc:'Course de pirogues sur la rivière Sangker. Moins massif qu\'à Phnom Penh mais plus authentique et festif. Les habitants décorés de leurs plus beaux habits.'}
      ],
      loisirs: [
        {icon:'🎪', nom:'Phare Ponleu Selpak — Cirque Social', sub:'École de cirque · Spectacles Mar–Dim 19h30 · 8–15 USD · Acrobaties sur fond d\'histoires khmères'},
        {icon:'🍺', nom:'Battambang Brewery', sub:'Brasserie artisanale · Visite + dégustation · Happy hour 16h–18h · Street 1'},
        {icon:'🚲', nom:'Vélo de ville nocturne', sub:'Location 2–3 USD/j · Découverte des temples éclairés · Marché nocturne · Ambiance locale'},
        {icon:'🎨', nom:'Galeries d\'art de Battambang', sub:'Plusieurs galeries d\'artistes locaux · Peintures, sculptures, photographies · Entrée libre'}
      ],
      scooters: [
        {nom:'Seng Hout Moto', adresse:'Street 2, Psar Nat, Battambang', tel:'+855 12 534 212', prix:'6', note:'Automatique · Carte de la province offerte', lien:'https://wa.me/85512534212'},
        {nom:'Sokha Moto Rental', adresse:'Riverside Road, Battambang', tel:'+855 92 714 432', prix:'7', note:'Semi-auto disponible · Livraison à l\'hôtel', lien:'https://wa.me/85592714432'}
      ],
      coutumes: [
        {icon:'🌾', txt:'<strong>Ville agricole</strong> : les habitants vivent au rythme des rizières. Respectez les champs et demandez avant d\'y entrer.'},
        {icon:'🎪', txt:'<strong>Soutenir l\'art social</strong> : Phare Ponleu Selpak aide des enfants des rues. Assister à un spectacle ou acheter leur artisanat a un impact direct.'},
        {icon:'🤫', txt:'<strong>Cité calme</strong> : Battambang n\'est pas Siem Reap. Les habitants apprécient la tranquillité. Parlez doucement près des pagodes.'},
        {icon:'🛺', txt:'<strong>Négociez avec le sourire</strong> : les tuk-tuk locaux ont des prix raisonnables. Toujours convenir du prix avant de monter.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus depuis Phnom Penh', detail:'5–6h · 7–10 USD · Giant Ibis, Mekong Express · Départ le matin'},
        {icon:'🚌', main:'Bus depuis Siem Reap', detail:'3–4h · 5–7 USD · Plusieurs compagnies'},
        {icon:'🛥️', main:'Bateau rapide depuis Siem Reap', detail:'8h · Longe le Tonlé Sap · ~25 USD · Paysages magnifiques'},
        {icon:'🚕', main:'Taxi partagé', detail:'Depuis PP en 4h · ~8–10 USD/siège'}
      ]
    },
    'kampot': {
      nom: 'Kampot',
      emoji: '🌿',
      tagline: 'Perle coloniale au bord de la rivière, royaume du célèbre poivre de Kampot',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sunset_in_Kampot.jpg/1280px-Sunset_in_Kampot.jpg',
      budget: '20–35 $/jour', duree: '2–4 jours', distance: '148 km de PP (bus 2h30)', meilleureMoment: 'Nov–Avr',
      desc: 'Kampot est la ville qui symbolise le mieux l\'atmosphère détendue et authentique du Cambodge. Construite par les Français en bord de rivière à la fin du XIXe siècle, elle conserve un centre colonial remarquablement intact : façades art déco, maisons en bois sur pilotis, vieux marché aux senteurs d\'épices. La ville est célèbre dans le monde entier pour son poivre — considéré par les grands chefs comme l\'un des meilleurs du monde — cultivé sur les collines voisines depuis le XIIe siècle. À quelques kilomètres, la station coloniale de Bokor domine la jungle à 1080 m d\'altitude, et la mer de Chine méridionale ouvre vers Kep et l\'île de Koh Tonsay (l\'île du Lapin).',
      visites: [
        {nom: 'Plantation de poivre de Kampot', sub: 'Visites guidées · Dégustation · Achat direct producteur · ~8 USD'},
        {nom: 'Parc national de Bokor', sub: '1080 m d\'altitude · Ancien casino fantôme français · Brouillard mystérieux · Faune sauvage'},
        {nom: 'Centre colonial de Kampot', sub: 'Tour de l\'horloge · Vieux marché · Maisons franco-chinoises colorées'},
        {nom: 'Kayak sur la rivière Kampot', sub: 'Location ~5 USD/h · Coucher de soleil depuis l\'eau · Mangroves et poissons'}
      ],
      activites: [
        {nom:'Coucher de soleil en bateau sur la rivière', sub:'Happy hour flottant · Cocktails tropicaux · ~8–12 USD · Départ 17h'},
        {nom:'Vélo vers Kep (25 km)', sub:'Route plate le long de la côte · Crabes frais à Kep · Retour en tuk-tuk'},
        {nom:'Escalade aux Rochers des Éléphants', sub:'Blocs de granite dans la campagne · Vue à 360° · Gratuit · 20 min de Kampot'},
        {nom:'Cours de cuisine & dégustation de poivre de Kampot', sub:'Unique au monde · Recettes avec poivre frais vert et rouge · ~18–25 USD'}
      ],
      restaurants: [
        {emoji:'🌶', nom:'Rikitikitavi', badge:'Fusion Khmer-Méditerranéen ⭐⭐⭐', adresse:'Riverside Road, Kampot', prix:'8–15 USD/plat', horaires:'Tous les jours · 11h–22h30', desc:'L\'adresse de référence de Kampot. Amok de poisson signature au lait de coco, poulet grillé au poivre kampot, cocktails thaïs. Vue rivière depuis la terrasse.', lien:'https://www.booking.com/hotel/kh/rikitikitavi.html', agoda:'https://www.agoda.com/search?textToSearch=Rikitikitavi+Kampot+Cambodia'},
        {emoji:'🫚', nom:'Naga House', badge:'Poivre Kampot Signature ⭐⭐', adresse:'Centre-ville, Kampot', prix:'5–11 USD/plat', horaires:'Mer–Lun · 11h–21h30', desc:'Tous les plats cuisinés avec le fameux poivre de Kampot. Bœuf au poivre frais vert, poulet au poivre rouge, curry de canard. Terrasse de jardin charmante.'},
        {emoji:'☕', nom:'Epic Arts Café', badge:'Social Enterprise ⭐', adresse:'Rue du Marché, Kampot', prix:'4–8 USD/plat', horaires:'Mar–Dim · 7h30–17h', desc:'Café-restaurant formant des personnes handicapées. Sandwichs, salades fraîches, currys khmers légers. Ambiance détendue, garden cafe verdoyant.'},
        {emoji:'🐟', nom:'Bokor Mountain Club', badge:'Cuisine Locale & Fruits de Mer ⭐', adresse:'Riverside, Kampot', prix:'5–10 USD/plat', horaires:'Tous les jours · 12h–22h', desc:'Poissons de rivière frais, crevettes sautées au basilic, soupe de tamarin. Ancienne bâtisse coloniale, vue sur le fleuve.'}
      ],
      evenements: [
        {date:'Mai', nom:'Kampot Pepper Festival', desc:'Festival dédié au célèbre poivre IGP de Kampot. Dégustations avec des chefs locaux et internationaux, visites de plantations, vente directe producteurs.'},
        {date:'Oct', nom:'Kampot Writers & Readers Festival', desc:'Auteurs cambodgiens et internationaux, ateliers d\'écriture, lectures publiques. L\'un des festivals littéraires les plus courus d\'Asie du Sud-Est.'},
        {date:'Nov', nom:'Course de pirogues — Bon Om Touk local', desc:'Courses de bateaux sur la rivière Kampot. Moins massif que la capitale mais festif et authentique. Stands de cuisine locale sur les berges.'}
      ],
      loisirs: [
        {icon:'🛟', nom:'River Tubing', sub:'Descente en bouée sur la rivière Kampot · Location ~3–5 USD · Idéal par temps chaud'},
        {icon:'🧗', nom:'Canyoning à Bokor', sub:'Rappel et cascade dans la montagne · Guide obligatoire · ~30 USD · Réservation guesthouses'},
        {icon:'🎬', nom:'Cinéma en Plein Air — Bodhi Villa', sub:'Films en bord de rivière · 3 USD + consommation · Ambiance hippie-chic · Soir'},
        {icon:'🛶', nom:'Kayak de rivière au coucher du soleil', sub:'Location ~5 USD/h · Mangroves et poissons visibles · Calme absolu'}
      ],
      scooters: [
        {nom:'See You Later Scooters', adresse:'Rue de la Rivière, Kampot', tel:'+855 17 888 245', prix:'5–6', note:'Automatique · Carte IGN de la région offerte', lien:'https://wa.me/85517888245'},
        {nom:'Kampot Moto Rental', adresse:'Old Market area, Kampot', tel:'+855 89 712 300', prix:'6–7', note:'Semi-auto dispo · Bonne connaissance des routes locales', lien:'https://wa.me/85589712300'}
      ],
      coutumes: [
        {icon:'🌶', txt:'<strong>Le poivre de Kampot</strong> est une fierté nationale protégée par une IGP. Achetez directement aux producteurs locaux plutôt qu\'aux boutiques touristiques.'},
        {icon:'🌙', txt:'<strong>Ville de détente</strong> : Kampot vit lentement. Les soirées s\'arrêtent tôt. Respectez le calme des quartiers résidentiels après 22h.'},
        {icon:'🌊', txt:'<strong>Courants de rivière</strong> : en saison des pluies, la rivière monte vite. Suivez toujours les conseils des locaux avant de nager.'},
        {icon:'🤝', txt:'<strong>Commerce équitable</strong> : plusieurs coopératives de femmes vendent artisanat et épices. Ces achats ont un impact social réel.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus depuis Phnom Penh', detail:'2h30–3h · 5–8 USD · Virak Buntham, Capitol Tours · Départ toute la matinée'},
        {icon:'🚌', main:'Bus depuis Sihanoukville', detail:'1h30 · 4–6 USD · Départ matin et après-midi'},
        {icon:'🚕', main:'Taxi partagé depuis PP', detail:'2h · ~8 USD/siège · Plus rapide que le bus'},
        {icon:'🛺', main:'Tuk-tuk depuis Kep', detail:'30 min · ~6–8 USD · Idéal pour combiner les deux villes'}
      ]
    },
    'sihanoukville': {
      nom: 'Sihanoukville',
      emoji: '🏖️',
      tagline: 'Capitale balnéaire du Cambodge, porte des îles paradisiaques',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aerial_View_Beaches_in_Sihanoukville.jpg/1280px-Aerial_View_Beaches_in_Sihanoukville.jpg',
      budget: '25–45 $/jour', duree: '2–5 jours', distance: '230 km de PP (bus 3h)', meilleureMoment: 'Nov–Avr',
      desc: 'Fondée en 1964 et nommée en hommage au roi Norodom Sihanouk, la ville portuaire cambodgienne fut longtemps la station balnéaire préférée des Cambodgiens. Un afflux massif d\'investissements chinois à partir de 2016 a profondément transformé la ville principale, mais les plages d\'Otres — à l\'écart du centre — ont conservé leur atmosphère de paradis. Depuis Sihanoukville, des ferries réguliers relient Koh Rong (25 km au large) et Koh Rong Sanloem, deux îles aux plages immaculées, aux forêts tropicales et au plancton bioluminescent qui illumine la mer la nuit.',
      visites: [
        {nom: 'Otres Beach', sub: 'Plage la plus sauvage et authentique · 4 km de sable fin · Cocotiers et petits restos'},
        {nom: 'Independence Beach', sub: 'Vue sur l\'Hôtel de l\'Indépendance historique · Coucher de soleil idéal · Moins de monde'},
        {nom: 'Ferry vers Koh Rong', sub: '45 min de traversée · Plancton bioluminescent la nuit · Sokha Beach sans voitures'},
        {nom: 'Marché de nuit de Sihanoukville', sub: 'Street food, fruits de mer frais, artisanat · Ambiance cambodgienne authentique · Dès 18h'}
      ],
      activites: [
        {nom:'Plongée sous-marine et snorkeling', sub:'Autour des îles · Coraux intacts · 1 plongée initiée ~35 USD avec équipement'},
        {nom:'Excursion journée à Koh Rong', sub:'Départ 8h · Plage Sok San + snorkeling + déjeuner · Retour 17h · ~25–35 USD'},
        {nom:'Nuit sur l\'île de Koh Rong Sanloem', sub:'Bioluminescence spectaculaire · Plage Lazy Beach · Aucune voiture · Total dépaysement'},
        {nom:'Pêche en mer avec les pêcheurs locaux', sub:'Départ à l\'aube · Expérience authentique · Certains hôtels organisent ces sorties'}
      ],
      restaurants: [
        {emoji:'🦞', nom:'Coconut Beach Restaurant', badge:'Fruits de Mer & Khmer ⭐⭐', adresse:'Otres Beach, Sihanoukville', prix:'6–12 USD/plat', horaires:'Tous les jours · 7h–22h', desc:'Amok de poisson frais du jour, crevettes sautées au poivre vert kampot, fruits de mer grillés sur charbon. Vue directe sur la mer.'},
        {emoji:'🔥', nom:'Snowy BBQ & Khmer Kitchen', badge:'Grillades & Tradition ⭐⭐', adresse:'Ochheuteal Beach area, Sihanoukville', prix:'5–10 USD/plat', horaires:'Tous les jours · 11h–23h', desc:'Brochettes de viandes marinées, curry de crabe, riz frit aux herbes. Tables en bord de plage, ambiance animée le soir.'},
        {emoji:'🍜', nom:'Meanchey Khmer Restaurant', badge:'Prix Locaux ⭐', adresse:'Phsar Leu Market area, Sihanoukville', prix:'3–6 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Restaurant familial khmer loin des plages touristiques. Soupes du matin, lok lak, currys du jour. Prix locaux, portions généreuses.'},
        {emoji:'🐟', nom:'Otres Market Street Food', badge:'Street Food ⭐', adresse:'Otres Village, Sihanoukville', prix:'2–6 USD/plat', horaires:'Sam–Dim · 17h–22h', desc:'Marché nocturne de produits locaux. Poissons grillés, satay khmer, smoothies de fruits tropicaux. L\'adresse des voyageurs en basse saison.'}
      ],
      evenements: [
        {date:'Mar', nom:'Festival des Plages de Sihanoukville', desc:'Musique live sur Otres Beach, compétitions de beach-volley, food trucks, sports nautiques. Ouvert à tous, entrée libre.'},
        {date:'Avr\n13–16', nom:'Khmer New Year sur la Plage', desc:'Fête nationale célébrée au bord de l\'eau. Jeux d\'eau traditionnels, musique khmère, foule de familles cambodgiennes. Ambiance unique.'},
        {date:'Oct–Nov', nom:'Bon Om Touk côtier', desc:'Festival des Eaux version maritime. Course de pirogues dans le port, décorations, feux d\'artifice sur la mer.'}
      ],
      loisirs: [
        {icon:'🤿', nom:'Certification Plongée PADI', sub:'Open Water 3 jours · ~350 USD tout compris · Plusieurs centres sur Otres Beach'},
        {icon:'🏐', nom:'Beach Volley', sub:'Otres Beach · Filets toujours montés · Gratuit · Tournois improvisés le soir'},
        {icon:'🛻', nom:'ATV & Quad autour d\'Otres', sub:'Location ~25 USD/heure · Pistes dans les collines au-dessus de la plage'},
        {icon:'🎸', nom:'Bars & Musique Live Otres', sub:'Happy hour 17h–19h · Concerts acoustiques · Ambiance backpacker détendue'}
      ],
      scooters: [
        {nom:'Happy Moto — Otres Beach', adresse:'Otres Beach Road, Sihanoukville', tel:'+855 96 872 0430', prix:'8', note:'Automatique · Casque inclus · Proches des plages', lien:'https://wa.me/855968720430'},
        {nom:'Koh Rong Moto Rental', adresse:'Rue Sopheakmongkol, Sihanoukville', tel:'+855 15 528 252', prix:'7', note:'Semi-automatique disponible · Livraison hôtel', lien:'https://wa.me/85515528252'}
      ],
      coutumes: [
        {icon:'👙', txt:'<strong>Tenue de plage</strong> : acceptable sur les plages touristiques, mais couvrez-vous pour le marché ou les rues de la ville.'},
        {icon:'🐠', txt:'<strong>Coraux et faune marine</strong> : ne touchez jamais les coraux. Crème solaire biodégradable fortement recommandée.'},
        {icon:'🌅', txt:'<strong>Partage de la plage</strong> : les familles cambodgiennes viennent se baigner au coucher du soleil. Comportement discret apprécié.'},
        {icon:'💵', txt:'<strong>Monnaie</strong> : le dollar US est accepté partout. Gardez quelques riels pour les marchés et tuk-tuks.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus depuis Phnom Penh', detail:'3–4h · 6–10 USD · Giant Ibis, Capitol Tours · Climatisé'},
        {icon:'🚌', main:'Bus depuis Kampot', detail:'1h30 · 4–6 USD · Plusieurs départs/jour'},
        {icon:'✈️', main:'Vol depuis Phnom Penh', detail:'Cambodia Bayon Airlines · 45 min · 60–100 USD'},
        {icon:'🛥️', main:'Ferry vers les îles', detail:'Speed boat Koh Rong : 45 min · ~25 USD AR · Départ 8h et 15h'}
      ]
    },
    'kep': {
      nom: 'Kep',
      emoji: '🦀',
      tagline: 'Ancienne villégiature royale, paradis des crabes et des couchers de soleil',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kep_Bord_de_mer.JPG/1280px-Kep_Bord_de_mer.JPG',
      budget: '15–30 $/jour', duree: '1–2 jours', distance: '172 km de PP · 25 km de Kampot', meilleureMoment: 'Nov–Avr',
      desc: 'Kep fut construite en 1908 comme station balnéaire exclusive pour la bourgeoisie franco-cambodgienne. Ses villas coloniales Art déco semées dans la jungle — la plupart abandonnées et mangées par la végétation depuis les Khmers Rouges — lui donnent un charme mélancolique unique. La ville vit aujourd\'hui au rythme de ses pêcheurs, de son marché aux crabes légendaire et des touristes qui viennent goûter les fameux crabes au poivre vert de Kampot. Son parc national cache plages sauvages, sentiers dans la forêt tropicale et vue sur les îles. En bateau, l\'île de Koh Tonsay (l\'île du Lapin) offre une escapade de quelques heures ou une nuit en hamac.',
      visites: [
        {nom: 'Marché aux Crabes de Kep', sub: 'Pêcheurs qui vendent leur prise du matin · Crabe au poivre vert cuisiné devant vous · ~8 USD'},
        {nom: 'Île de Koh Tonsay (Île du Lapin)', sub: 'Bateau depuis Kep Pier · 15 min · Plage isolée · Hamacs · ~8 USD aller-retour'},
        {nom: 'Parc National de Kep', sub: 'Sentier de 8 km dans la jungle · Ruines de villas coloniales · Papillons et singes'},
        {nom: 'Villas coloniales abandonnées', sub: 'Architecture Art déco envahie par la jungle · Témoins silencieux de l\'histoire'}
      ],
      activites: [
        {nom:'Repas au Marché aux Crabes', sub:'Choisissez votre crabe vivant · Cuisiné en 15 min devant vous · Vue sur la mer · ~8–15 USD'},
        {nom:'Kayak autour de l\'Île du Lapin', sub:'Eaux translucides · Location ~5 USD/h · Faune sous-marine visible · Snorkeling'},
        {nom:'Scooter vers les plantations de poivre', sub:'Entre Kep et Kampot · Producteurs locaux qui accueillent les visiteurs'},
        {nom:'Coucher de soleil sur la plage de Kep', sub:'Vue sur les îles · Pêcheurs qui rentrent · Un des plus beaux couchers du soleil du sud Cambodge'}
      ],
      restaurants: [
        {emoji:'🦀', nom:'Marchands du Marché aux Crabes', badge:'Spécialité Incontournable ⭐⭐⭐', adresse:'Kep Crab Market, bord de mer', prix:'8–15 USD/pers', horaires:'Tous les jours · 7h–18h', desc:'Vous choisissez votre crabe vivant dans les cages flottantes, les vendeurs le cuisinent immédiatement. Crabe au poivre vert de Kampot, crabe au sel, crevettes sautées. Expérience unique.'},
        {emoji:'⛵', nom:'Sailing Club Kep', badge:'Vue Mer & Fruits de Mer ⭐⭐', adresse:'Kep Beach, face à la mer', prix:'8–16 USD/plat', horaires:'Tous les jours · 10h–22h', desc:'Fruits de mer frais, amok de poisson, gambas au basilic. Vue panoramique sur les îles, terrasse directement sur la plage.'},
        {emoji:'🌿', nom:'Kep Lodge Restaurant', badge:'Cuisine Raffinée ⭐⭐', adresse:'Hillside, Kep', prix:'9–16 USD/plat', horaires:'Tous les jours · 12h–21h', desc:'Cuisine fusion avec produits locaux : poivre de Kampot, crabe et poissons de la journée. Terrasse perchée avec vue sur la mer et les îles.'},
        {emoji:'🍚', nom:'Kimly Restaurant', badge:'Prix Locaux ⭐', adresse:'Front de mer, Kep', prix:'4–9 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Restaurant familial tenu par des pêcheurs. Currys de fruits de mer, soupe de crabe, riz sauté aux légumes. Prix locaux, ambiance authentique.'}
      ],
      evenements: [
        {date:'Mar', nom:'Festival du Crabe de Kep', desc:'Marché spécial, concours de cuisine du crabe, dégustation avec les pêcheurs locaux. Ambiance de fête de village cambodgienne.'},
        {date:'Nov', nom:'Bon Om Touk côtier de Kep', desc:'Petite fête des bateaux sur le front de mer de Kep. Décorations, repas communautaires, spectacle de coucher de soleil.'}
      ],
      loisirs: [
        {icon:'🌿', nom:'Randonnée Parc National de Kep', sub:'8 km de sentiers dans la jungle · Villas coloniales abandonnées · Papillons géants · Guide optionnel'},
        {icon:'🤿', nom:'Snorkeling Île du Lapin (Koh Tonsay)', sub:'Eaux claires · Coraux · Bateau depuis Kep Pier · ~8 USD AR + location masque'},
        {icon:'🛵', nom:'Tour scooter des plantations', sub:'Kampot–Kep en scooter · Poivre, sel, cocotiers · Route côtière magnifique'},
        {icon:'📸', nom:'Villas coloniales abandonnées', sub:'Architecture Art Déco envahie par la jungle · Témoins de l\'histoire · Photogénique'}
      ],
      scooters: [
        {nom:'Location via les guesthouses', adresse:'Kep Beachfront & centre-ville', tel:'Demandez à votre hébergement', prix:'6–8', note:'La plupart des guesthouses proposent une location'},
        {nom:'Butterfly Tours Kep', adresse:'Front de mer, Kep', tel:'Renseignements sur place', prix:'8–10', note:'Location + circuits guidés · Connaissent tous les sentiers'}
      ],
      coutumes: [
        {icon:'🦀', txt:'<strong>Le crabe, c\'est sacré à Kep</strong> : ne refusez pas une invitation à partager un crabe. C\'est la plus belle marque d\'hospitalité locale.'},
        {icon:'🌊', txt:'<strong>Plages familiales</strong> : Kep n\'est pas un spot de fête. Comportement discret très apprécié des familles cambodgiennes.'},
        {icon:'🌿', txt:'<strong>Parc national</strong> : ne cueillez rien, aucun déchet. Les sentiers sont entretenus par des bénévoles du village.'},
        {icon:'⛵', txt:'<strong>Bateaux vers les îles</strong> : négociez prix et heure de retour avant de monter. Aller-retour toujours précisé.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus depuis Phnom Penh', detail:'3h · 5–8 USD · Via Kampot · Quelques compagnies'},
        {icon:'🛺', main:'Tuk-tuk depuis Kampot', detail:'25 km · 30 min · ~8–10 USD · Option la plus pratique'},
        {icon:'🚲', main:'Vélo depuis Kampot', detail:'25 km · Route plate côtière · Idéal en saison fraîche'},
        {icon:'🛥️', main:'Bateau vers Koh Tonsay', detail:'15 min depuis Kep Pier · ~8 USD AR · Départ 8h–15h'}
      ]
    },
    'koh-rong': {
      nom: 'Koh Rong',
      emoji: '🏝️',
      tagline: 'Île sauvage aux 43 plages, plancton bioluminescent et vie hors du temps',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Sok_San_Beach_bay_Koh_Rong.jpg',
      budget: '25–45 $/jour', duree: '2–4 jours', distance: 'Ferry 45 min depuis Sihanoukville', meilleureMoment: 'Nov–Avr',
      desc: 'Koh Rong est la deuxième plus grande île du Cambodge — 43 km de côtes, 43 plages, 40 000 hectares de forêt tropicale primaire. Sans voitures ni motos, accessible uniquement en bateau, elle offre un dépaysement absolu à seulement 45 minutes de Sihanoukville. Découverte par les backpackers dans les années 2000, elle se développe progressivement tout en conservant ses zones sauvages. Ses eaux sont réputées pour le plancton bioluminescent qui illumine la mer d\'un bleu spectaculaire lors des nuits sans lune — une expérience que les visiteurs décrivent comme magique. Sokha Beach, sans route ni construction, figure parmi les plus belles plages de toute l\'Asie du Sud-Est.',
      visites: [
        {nom: 'Sokha Beach (4K Beach)', sub: 'Accessible à pied 1h depuis Koh Touch · Aucune construction · Sable blanc immaculé · Snorkeling'},
        {nom: 'Village de pêcheurs de Koh Touch', sub: 'Port principal · Marchés locaux · Couchers de soleil sur les bateaux de pêche'},
        {nom: 'Forêt tropicale primaire', sub: 'Sentiers de randonnée · Orchidées sauvages · Singes et oiseaux rares · Cascade intérieure'},
        {nom: 'Long Beach', sub: '7 km de plage déserte · Eaux turquoise · Baignade en snorkeling · Coucher de soleil à l\'ouest'}
      ],
      activites: [
        {nom:'Baignade bioluminescente la nuit', sub:'Plancton lumineux bleu électrique · Expérience unique · Ne pas utiliser de crème solaire'},
        {nom:'Snorkeling & plongée initiation', sub:'Coraux intacts · Tortues de mer · Poissons perroquets · ~35 USD la plongée initiée'},
        {nom:'Randonnée vers la cascade', sub:'Forêt dense · 2h aller-retour · Baignade sous la chute · Guide local conseillé'},
        {nom:'Kayak autour de l\'île', sub:'Demi-journée · Criques cachées · Mangroves · ~8 USD/heure'}
      ],
      restaurants: [
        {emoji:'🌴', nom:'Tree House Restaurant', badge:'Vue Mer & Cuisine Khmère ⭐⭐', adresse:'Koh Touch Village, Koh Rong', prix:'5–10 USD/plat', horaires:'Tous les jours · 7h–22h', desc:'Perché dans les arbres avec vue sur la mer. Amok de poisson, curry rouge de crevettes, fruits de mer grillés sur charbon. Le meilleur coucher de soleil de l\'île.'},
        {emoji:'🌅', nom:'Sky Bar Koh Rong', badge:'Panoramique & Cocktails ⭐⭐', adresse:'Koh Touch Village, Koh Rong', prix:'6–12 USD/plat', horaires:'Tous les jours · 10h–tard', desc:'Vue à 360° sur l\'archipel. Currys, amok, poissons du jour. Cocktails tropicaux. Le rendez-vous du coucher de soleil.'},
        {emoji:'🦐', nom:'Fisherman\'s Den', badge:'Fruits de Mer Frais ⭐', adresse:'Beach Road, Koh Touch', prix:'4–9 USD/plat', horaires:'Tous les jours · 8h–21h', desc:'Pêcheurs-restaurateurs qui cuisinent leur prise du matin. Poissons grillés entiers, crevettes à l\'ail, riz au jasmin.'},
        {emoji:'☀️', nom:'Sok San Beach Restaurant', badge:'Pieds dans le Sable ⭐', adresse:'Sok San Beach (4K Beach)', prix:'5–10 USD/plat', horaires:'Tous les jours · 8h–18h', desc:'Sur la plage la plus sauvage de l\'île. Snacks, sandwichs, coconut water frais. L\'endroit parfait pour déjeuner après la baignade.'}
      ],
      evenements: [
        {date:'Pleine\nlune', nom:'Full Moon Party — Koh Touch', desc:'Fête mensuelle sur la plage de Koh Touch Village. Musique, feux de bengale, ambiance internationale. La plus festive des soirées de l\'île.'},
        {date:'Avr', nom:'Khmer New Year sur l\'Île', desc:'Fête nationale célébrée dans le village de pêcheurs. Jeux d\'eau, repas communautaires, danse khmère. Ambiance authentique loin des touristes.'}
      ],
      loisirs: [
        {icon:'🏄', nom:'Stand-Up Paddle (SUP)', sub:'Location ~8 USD/h · Eaux calmes dans la baie · Lever de soleil idéal depuis le paddle'},
        {icon:'🏐', nom:'Beach Volley Plage Longue', sub:'Long Beach · Gratuit · Matchs quotidiens entre voyageurs · Ambiance conviviale'},
        {icon:'🌙', nom:'Night Swimming (Plancton)', sub:'Chaque nuit sans lune · Entrée dans l\'eau bleue électrique · Expérience unique au monde'},
        {icon:'🌲', nom:'Forêt Primaire — Sentiers', sub:'40 000 ha de jungle · Orchidées · Singes · Cascade intérieure · Guide recommandé'}
      ],
      scooters: [
        {nom:'Aucune voiture ni moto sur l\'île', adresse:'Koh Rong est sans route carrossable', tel:'Non applicable', prix:'—', note:'Déplacement à pied ou bateau-taxi entre les plages (~3–5 USD)'}
      ],
      coutumes: [
        {icon:'🌿', txt:'<strong>Zéro déchet</strong> : l\'île n\'a pas d\'usine de traitement. Ramenez vos déchets ou utilisez les poubelles. Ne laissez rien sur les plages.'},
        {icon:'🐢', txt:'<strong>Tortues marines</strong> : observez à distance respectueuse. Ne touchez jamais une tortue de mer.'},
        {icon:'🔦', txt:'<strong>Plancton bioluminescent</strong> : pas de crème solaire ni d\'insectifuge avant de nager la nuit. Ces produits détruisent le plancton.'},
        {icon:'🏘️', txt:'<strong>Village de pêcheurs</strong> : les habitants vivent de la pêche depuis des générations. Achetez et mangez chez eux.'}
      ],
      transports: [
        {icon:'🛥️', main:'Speed boat depuis Sihanoukville', detail:'45 min · ~25 USD AR · Départ 8h et 15h · GTVC Speed Ferry'},
        {icon:'🛥️', main:'Ferry lent (slow boat)', detail:'1h30–2h · Moins cher · Plus de bagages acceptés'},
        {icon:'🚌', main:'Bus PP → Sihanoukville puis ferry', detail:'Possible en 1 journée depuis Phnom Penh'},
        {icon:'⚓', main:'Sur l\'île', detail:'Aucune route · Déplacement à pied ou bateau-taxi inter-plages · ~3–5 USD'}
      ]
    },
    'koh-rong-sanloem': {
      nom: 'Koh Rong Sanloem',
      emoji: '🤿',
      tagline: 'L\'île calme, sanctuaire de plongée et de repos absolu',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Long-beach-kog-rong-cambodia.jpg',
      budget: '30–55 $/jour', duree: '2–3 jours', distance: 'Ferry 1h15 depuis Sihanoukville', meilleureMoment: 'Nov–Avr',
      desc: 'Sœur cadette de Koh Rong, Koh Rong Sanloem est l\'île qui a choisi la tranquillité. Zone marine protégée depuis 2016, elle interdit les sports motorisés sur l\'eau et limite les nouvelles constructions. Résultat : une nature préservée, des fonds marins parmi les plus riches du Golfe de Thaïlande, et une atmosphère de bout du monde qui attire les voyageurs en quête d\'authenticité. La plage Lazy Beach, sur la côte ouest, est régulièrement citée parmi les plus belles d\'Asie. Le village de pêcheurs de Saracen Bay accueille les visiteurs dans des hébergements simples et savoureux. Le plancton bioluminescent y est également spectaculaire, parfois plus intense qu\'à Koh Rong.',
      visites: [
        {nom: 'Lazy Beach', sub: 'Côte ouest · Coucher de soleil époustouflant · Quelques bungalows uniquement · Tranquillité absolue'},
        {nom: 'Saracen Bay', sub: 'Baie principale · Village de pêcheurs · Eaux peu profondes turquoise · Idéal pour famille'},
        {nom: 'Mad Monkey Resort Beach', sub: 'Animation plus festive · Cocktails en bord de mer · Événements soirée'},
        {nom: 'Sentiers forestiers', sub: 'Traversée de l\'île à pied 2h · Faune endémique · Papillons géants · Vue panoramique'}
      ],
      activites: [
        {nom:'Plongée certifiée PADI', sub:'École à Saracen Bay · Open Water ~350 USD · Sorties guidées ~40 USD'},
        {nom:'Snorkeling en zone marine protégée', sub:'Poissons-clowns, raies, barracudas · Visibilité 15–20 m · Masque-tuba ~3 USD'},
        {nom:'Nuit bioluminescente', sub:'Particulièrement intense dans la baie · Baignade nocturne spectaculaire'},
        {nom:'Kayak dans les mangroves', sub:'Nord de l\'île · Hérons, martins-pêcheurs · Silence total · ~5 USD/h'}
      ],
      restaurants: [
        {emoji:'🌙', nom:'Mad Monkey Restaurant', badge:'Bungalows & Cuisine ⭐⭐', adresse:'Saracen Bay, Koh Rong Sanloem', prix:'5–11 USD/plat', horaires:'Tous les jours · 7h–22h', desc:'Amok, currys, sandwichs, burgers. Vue sur la baie. Soirées animées en saison. Le restaurant-bar de référence de l\'île.'},
        {emoji:'🌅', nom:'Lazy Beach Restaurant', badge:'Coucher de Soleil Unique ⭐⭐⭐', adresse:'Lazy Beach, côte ouest', prix:'6–13 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Poissons grillés du jour au charbon, currys de crevettes, coconut water frais. Vue sur le coucher de soleil à l\'ouest, classé parmi les plus beaux d\'Asie.'},
        {emoji:'🤿', nom:'Dive Shop Restaurant', badge:'Cuisine Simple & Fraîche ⭐', adresse:'Saracen Bay, Koh Rong Sanloem', prix:'4–8 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Cuisine légère en bord de mer. Sandwichs, salades fraîches, amok de poisson. Brunch disponible pour les plongeurs du matin.'},
        {emoji:'🌿', nom:'Village Local Fishermen', badge:'Prix Locaux ⭐', adresse:'Village côté est, Koh Rong Sanloem', prix:'3–6 USD/plat', horaires:'Matin & soir', desc:'Pêcheurs qui cuisinent leur propre prise. Poissons grillés, riz, légumes. Prix locaux, accueil chaleureux, authenticité totale.'}
      ],
      evenements: [
        {date:'Pleine\nlune', nom:'Full Moon Party — Saracen Bay', desc:'Plus calme qu\'à Koh Rong mais festive. Musique, feux sur la plage, cocktails. Ambiance internationale détendue.'},
        {date:'Nov', nom:'Festival sous-marin annuel', desc:'Journée de nettoyage des fonds marins par les plongeurs locaux et visiteurs. Présentation des espèces découvertes. Sensibilisation à la protection marine.'}
      ],
      loisirs: [
        {icon:'🤿', nom:'Plongée et snorkeling guidé', sub:'Zone marine protégée · Coraux exceptionnels · ~12 USD snorkeling · ~40 USD plongée'},
        {icon:'🧘', nom:'Yoga du matin sur la plage', sub:'Saracen Bay · Sessions libres ou organisées par certains bungalows · Gratuites'},
        {icon:'🌲', nom:'Traversée de l\'île à pied', sub:'2h30 · Forêt tropicale · Vue panoramique au sommet · Départ tôt le matin conseillé'},
        {icon:'🌙', nom:'Night Swimming bioluminescent', sub:'Meilleures conditions : nuit sans lune · Pas de crème solaire · Expérience magique'}
      ],
      scooters: [
        {nom:'Aucune voiture ni moto sur l\'île', adresse:'Koh Rong Sanloem est sans route', tel:'Non applicable', prix:'—', note:'Déplacement à pied ou bateau-taxi inter-plages · ~3–5 USD'}
      ],
      coutumes: [
        {icon:'🤿', txt:'<strong>Zone marine protégée</strong> : aucun moteur rapide, pas de pêche récréative, ancre interdite sur les coraux. Règles strictes.'},
        {icon:'🌙', txt:'<strong>Vie sans réseau</strong> : internet très limité. Déconnectez-vous vraiment. C\'est le but.'},
        {icon:'🏡', txt:'<strong>Famille khmère</strong> : la plupart des bungalows sont tenus par des familles locales. « Aw koun » (merci en khmer) est toujours très apprécié.'},
        {icon:'🌊', txt:'<strong>Courants</strong> : renseignez-vous avant de nager loin. Certaines zones ont des courants en saison des pluies.'}
      ],
      transports: [
        {icon:'🛥️', main:'Ferry GTVC depuis Sihanoukville', detail:'1h15 · ~25 USD AR · Départs matin et début d\'après-midi'},
        {icon:'🛥️', main:'Navette inter-îles depuis Koh Rong', detail:'~8–10 USD · Sur demande ou selon horaires'},
        {icon:'🚌', main:'Combiné bus PP + ferry', detail:'Possible en une journée depuis Phnom Penh'},
        {icon:'⚓', main:'Sur l\'île', detail:'Uniquement à pied ou bateau-taxi · ~3–5 USD inter-plages'}
      ]
    },
    'poipet': {
      nom: 'Poipet',
      emoji: '🚏',
      tagline: 'Frontière animée entre Cambodge et Thaïlande, point de transit incontournable',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Poipet%2C_Cambodia-Thai_border.jpg/1280px-Poipet%2C_Cambodia-Thai_border.jpg',
      budget: '15–25 $/jour', duree: 'Transit / 1 jour max', distance: '380 km de PP · 4 km d\'Aranyaprathet (Thaïlande)', meilleureMoment: 'Nov–Mar (à éviter en fête nationale)',
      desc: 'Poipet est avant tout un point de passage entre le Cambodge et la Thaïlande — et l\'un des postes frontaliers terrestres les plus fréquentés d\'Asie du Sud-Est. Son atmosphère est unique : un mélange de marchands ambulants, de casinos (zone franche), de tuk-tuks bondés et de foules bigarrées de voyageurs en transit. La ville en elle-même offre peu d\'attrait touristique, mais elle est une porte d\'entrée pratique pour rejoindre Bangkok depuis Siem Reap en une journée. La traversée de la frontière peut parfois être lente — arrivez tôt le matin pour éviter les files.',
      visites: [
        {nom: 'Frontière Cambodge–Thaïlande', sub: 'Poste officiel ouvert 7h–20h · Tampon de sortie côté cambodgien, tampon d\'entrée côté thaï'},
        {nom: 'Casino Grand Diamond', sub: 'Zone de jeux réservée aux étrangers · Spectacle en soi · Ne recommandé qu\'en observateur'},
        {nom: 'Marché frontalier', sub: 'Fruits, épices, textiles, produits moins chers côté cambodgien · Ambiance chaotique et colorée'},
        {nom: 'Grand Bouddha de Poipet', sub: 'Pagode principale en retrait de l\'animation · Calme relatif · Vue sur la ville'}
      ],
      activites: [
        {nom:'Passage de frontière', sub:'Passeport valide 6 mois · Formulaire de sortie côté cambodgien · Arrivez avant 9h pour éviter les files'},
        {nom:'Marché nocturne de Poipet', sub:'Cuisine de rue khmère · Ambiance locale authentique · Loin des zones touristiques'},
        {nom:'Bus direct Siem Reap → Bangkok', sub:'Via Poipet · 8h total · ~15–25 USD · Service régulier et pratique'},
        {nom:'Shopping au marché frontalier', sub:'Textiles, électronique, cosmétiques côté thaï moins chers · Ambiance chaotique et colorée'}
      ],
      restaurants: [
        {emoji:'🍲', nom:'Restaurant khmer du marché central', badge:'Prix Locaux ⭐', adresse:'Marché central de Poipet', prix:'3–6 USD/plat', horaires:'Tous les jours · 6h–21h', desc:'Cuisine khmère simple et authentique. Soupe de riz du matin (bobor), lok lak bœuf, currys du jour. Fréquenté par les locaux, loin des zones casino.'},
        {emoji:'🌅', nom:'Guesthouses avec restaurant', badge:'Pratique Transit ⭐', adresse:'Rue principale, Poipet', prix:'3–7 USD/plat', horaires:'Tous les jours · 6h30–22h', desc:'Plusieurs guesthouses proposent une cuisine khmère de base. Idéal pour un repas rapide avant ou après le passage de frontière.'}
      ],
      evenements: [
        {date:'Avr\n13–16', nom:'Khmer New Year — Fête locale', desc:'Célébrations modestes comparées à la capitale. Jeux d\'eau dans les rues, offrandes dans la pagode principale. Ambiance villageoise authentique.'},
        {date:'Nov', nom:'Bon Om Touk (Festival des Eaux)', desc:'Petite fête locale sur la rivière. Course de pirogues traditionnelles, stands de nourriture, musique khmère. Beaucoup moins fréquenté qu\'à Phnom Penh.'}
      ],
      loisirs: [
        {icon:'🎰', nom:'Casino Grand Diamond', sub:'Zone franche · Réservé aux étrangers · Entrée libre · Observation possible sans jouer'},
        {icon:'🛍', nom:'Shopping marché frontalier', sub:'Produits thaïs moins chers côté cambodgien · Cosmétiques, textiles, alimentation'},
        {icon:'🍜', nom:'Marché nocturne de rue', sub:'Cuisine khmère et thaïe · Brochettes, noodle soup · Prix locaux · Après 17h'}
      ],
      scooters: [
        {nom:'Location motos — Rue principale', adresse:'Rue nationale, centre-ville Poipet', tel:'Demandez à votre guesthouse', prix:'5–7', note:'Plusieurs loueurs informels · Vérifiez l\'état du scooter avant de partir · Prudence en zone frontalière'}
      ],
      coutumes: [
        {icon:'📋', txt:'<strong>Documents en règle</strong> : passeport valide 6 mois min. Formulaire de sortie à remplir côté cambodgien. Photos d\'identité utiles à avoir.'},
        {icon:'⚠️', txt:'<strong>Méfiance arnaques</strong> : des « agents » proposent d\'aider à passer la frontière contre paiement. C\'est inutile. La frontière est gratuite avec un passeport valide.'},
        {icon:'💵', txt:'<strong>Monnaie</strong> : le bath thaïlandais s\'utilise dès le côté thaï. Changez quelques dollars en baht avant de traverser.'},
        {icon:'🕐', txt:'<strong>Timing</strong> : arrivez à la frontière avant 9h. Les files s\'allongent fortement en fin de matinée et en début d\'après-midi.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus Siem Reap → Poipet', detail:'3–4h · 5–8 USD · Plusieurs compagnies · Départ dès 7h'},
        {icon:'🚌', main:'Bus Phnom Penh → Poipet', detail:'6–7h · 9–12 USD · Via Siem Reap ou direct'},
        {icon:'🚂', main:'Train depuis Bangkok (Aranyaprathet)', detail:'Gare côté thaïlandais · ~50 baht jusqu\'à Bangkok Hualamphong'},
        {icon:'🚕', main:'Taxi Poipet → Siem Reap', detail:'3–4h · ~30–40 USD taxi privé · Négociez'}
      ]
    },
    'pursat': {
      nom: 'Pursat',
      emoji: '🌾',
      tagline: 'Capitale du marbre cambodgien, porte d\'entrée des montagnes des Cardamomes',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pursat_Skyline.jpg/1280px-Pursat_Skyline.jpg',
      budget: '15–20 $/jour', duree: '1–2 jours', distance: '187 km de PP · 190 km de Siem Reap', meilleureMoment: 'Nov–Mar',
      desc: 'Pursat est l\'une des provinces les moins visitées du Cambodge — et c\'est précisément ce qui en fait le charme pour les voyageurs qui sortent des sentiers battus. La ville est connue dans tout le pays pour ses artisans sculpteurs de marbre, dont les ateliers bordent la route nationale depuis des générations. La province abrite aussi une partie du lac Tonlé Sap — avec ses villages de pêcheurs sur pilotis spectaculaires — et les premières collines des montagnes des Cardamomes, massif forestier presque vierge qui abrite des espèces endémiques rares : éléphants sauvages, ours à miel, léopards et gibbons. L\'écotourisme s\'y développe doucement autour du village de Chi Phat.',
      visites: [
        {nom: 'Ateliers de sculpture de marbre', sub: 'Artisans locaux · Statues de Bouddha, animaux, décorations · Achat possible directement'},
        {nom: 'Lac Tonlé Sap (villages sur pilotis)', sub: 'Village de Kampong Luong · Épiceries flottantes, écoles, temples sur l\'eau · Bateau ~5 USD/h'},
        {nom: 'Montagnes des Cardamomes', sub: 'Randonnée guidée depuis Chi Phat (3h de Pursat) · Forêt primaire · Cascades · Faune sauvage'},
        {nom: 'Pagode Wat Kanseng', sub: 'Temple bouddhiste orné · Artisanat local · Calme et sérénité'}
      ],
      activites: [
        {nom:'Village de Chi Phat — Écotourisme', sub:'Géré par les villageois · Randonnées guidées · Nuit en bungalow · ~20 USD/j tout compris'},
        {nom:'Navigation au lever du soleil sur le Tonlé Sap', sub:'Villages flottants · Oiseaux migrateurs en hiver · Bateau ~5 USD/h'},
        {nom:'Cours de sculpture sur marbre', sub:'Ateliers locaux qui accueillent les curieux · ~10 USD/session · Expérience insolite'},
        {nom:'Randonnée Montagnes des Cardamomes', sub:'Forêt primaire · Cascades · Faune sauvage · Guide local obligatoire · ~15–20 USD/j'}
      ],
      restaurants: [
        {emoji:'🍜', nom:'Restaurants du Marché Central de Pursat', badge:'Prix Locaux ⭐', adresse:'Marché central, Pursat', prix:'2–5 USD/plat', horaires:'Tous les jours · 6h–21h', desc:'La vraie cuisine de Pursat : soupe de poissons du Tonlé Sap, riz gluant, amok traditionnel. Ambiance marché authentique, prix locaux, portions généreuses.'},
        {emoji:'🌊', nom:'Restaurant bord de rivière Pursat', badge:'Fruits de Lac ⭐', adresse:'Bord de la rivière Pursat', prix:'4–8 USD/plat', horaires:'Tous les jours · 11h–22h', desc:'Poissons frais du Tonlé Sap grillés ou en curry, grenouilles sautées, riz aux herbes. Tables en terrasse avec vue sur la rivière.'},
        {emoji:'🪨', nom:'Chi Phat Guesthouse Restaurant', badge:'Écotourisme ⭐', adresse:'Village de Chi Phat (3h de Pursat)', prix:'3–6 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Cuisine du village: curry de poulet fermier, soupe de légumes de la jungle, riz de la province. Repas inclus dans les forfaits écotourisme.'}
      ],
      evenements: [
        {date:'Nov', nom:'Festival de la rivière de Pursat', desc:'Course de pirogues traditionnelles sur la rivière Pursat. Festivités locales, stands de street food, musique traditionnelle khmère. Atmosphère villageoise authentique.'},
        {date:'Nov', nom:'Bon Om Touk au bord du Tonlé Sap', desc:'Festival des Eaux dans sa version la plus rurale. Les pêcheurs décorent leurs pirogues, offrandes sur l\'eau, repas communautaires au bord du lac.'}
      ],
      loisirs: [
        {icon:'🦜', nom:'Observation des oiseaux — Tonlé Sap', sub:'Hérons, aigrettes, martins-pêcheurs · Dawn tours · Guide ornithologique ~15 USD'},
        {icon:'🪨', nom:'Ateliers de sculpture de marbre', sub:'Voir les artisans travailler · Acheter directement · Statues de Bouddha, animaux · Route nationale'},
        {icon:'🚵', nom:'VTT dans les Cardamomes', sub:'Pistes forestières depuis Chi Phat · Location ~5 USD/j · Magnifique en saison sèche'},
        {icon:'🌿', nom:'Écotourisme à Chi Phat', sub:'Village ex-braconnier reconverti · Randonnées, nuits en forêt · Réservation via CBET Chi Phat'}
      ],
      scooters: [
        {nom:'Pursat Moto Rental', adresse:'Route nationale 5, centre-ville Pursat', tel:'Demandez à votre guesthouse', prix:'5–7', note:'Idéal pour relier les ateliers de marbre et le Tonlé Sap · Peu de traffic en dehors de la ville'}
      ],
      coutumes: [
        {icon:'🌿', txt:'<strong>Écotourisme responsable</strong> : vos dépenses à Chi Phat financent directement la conservation. Respectez les sentiers et les règles des guides.'},
        {icon:'🎨', txt:'<strong>Artisans du marbre</strong> : leur travail est un héritage familial depuis des générations. Négociez avec respect, leurs prix sont déjà raisonnables.'},
        {icon:'🏡', txt:'<strong>Village de Chi Phat</strong> : communauté autrefois braconnière reconvertie dans l\'écotourisme. Respectez leur démarche, c\'est exemplaire.'},
        {icon:'🌊', txt:'<strong>Le Tonlé Sap change</strong> : en saison des pluies (juin–oct), le lac est 5 fois plus grand. Paysages radicalement différents selon la saison.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus Phnom Penh → Pursat', detail:'3h · 5–7 USD · Route nationale 5 · Départs le matin'},
        {icon:'🚌', main:'Bus Siem Reap → Pursat', detail:'3–4h · 6–9 USD · Route nationale 6 puis 5'},
        {icon:'🚕', main:'Taxi partagé depuis PP', detail:'Plus rapide · ~8 USD/siège · Idéal pour groupe'},
        {icon:'🛺', main:'Tuk-tuk local pour les sites', detail:'Demi-journée ~12–15 USD · Tonlé Sap + ateliers marbre'}
      ]
    },
    'mondulkiri': {
      nom: 'Mondulkiri',
      emoji: '🐘',
      tagline: 'Highlands sauvages du Cambodge — éléphants éthiques, forêts denses et peuple Bunong',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Mondul_Kiri_Cambodia_3048.jpg',
      budget: '25–45 $/jour', duree: '2–4 jours', distance: '371 km de PP (bus 6–7h)', meilleureMoment: 'Nov–Avr',
      desc: 'Mondulkiri est la plus grande province du Cambodge, et pourtant la moins peuplée. Ses hauts plateaux couverts de forêts de pins et de jungles denses contrastent radicalement avec le reste du pays plat. Sen Monorom, la capitale provinciale, est un bourg calme perché à 800 m d\'altitude où la fraîcheur surprend après la chaleur khmère. La province est le territoire ancestral du peuple Bunong, ethnie montagnarde aux traditions animistes et aux éléphants de travail sacrés. Aujourd\'hui, le Elephant Valley Project et le Mondulkiri Project accueillent ces pachydermes dans des sanctuaires éthiques. Mondulkiri abrite aussi de magnifiques cascades, des coffee farms biologiques et des sentiers de randonnée à travers une forêt encore préservée des déforestations massives qui menacent le reste de la région.',
      visites: [
        {nom: 'Elephant Valley Project (EVP)', sub: 'Sanctuaire éthique — observation libre sans montée · Réservation obligatoire · Demi ou journée complète'},
        {nom: 'Cascades de Bou Sra', sub: 'Plus grande cascade du Cambodge · 2 niveaux · 25 km de Sen Monorom · Baignade possible'},
        {nom: 'Dak Dam Waterfall', sub: 'Cascade sauvage en jungle · Moins connue que Bou Sra · Piste en scooter depuis Sen Monorom'},
        {nom: 'Village Bunong de Phulung', sub: 'Peuple montagnard aux coutumes ancestrales · Rites animistes · Visite respectueuse avec guide local'}
      ],
      activites: [
        {nom:'Sanctuaire des éléphants — Mondulkiri Project', sub:'Nourrir et observer les éléphants en semi-liberté · Revenus reversés aux familles Bunong · 1–2 jours'},
        {nom:'Randonnée en forêt tropicale', sub:'Guides Bunong · Traversée de jungle dense · Observation faune et flore · 15–35 USD la journée'},
        {nom:'Coffee farm visit', sub:'Cafés de spécialité cultivés en altitude · Robusta et Arabica locaux · Dégustation gratuite · Several farms near Sen Monorom'},
        {nom:'Scooter sur les pistes rouges', sub:'Routes latéritiques à travers collines et villages · Paysages hors du commun · Prévoir une journée'}
      ],
      restaurants: [
        {emoji:'🍽', nom:'Chili Pepper Restaurant', badge:'Cuisine Locale ⭐⭐', adresse:'Sen Monorom centre, Mondulkiri', prix:'4–9 USD/plat', horaires:'Tous les jours · 7h–21h', desc:'Meilleure adresse de Sen Monorom. Cuisine khmère et internationale, spécialités de sanglier et de gibier local. Vue sur la vallée depuis la terrasse. Prix très raisonnables.'},
        {emoji:'☕', nom:'Greenhouse Restaurant', badge:'Coffee & Repas ⭐⭐', adresse:'Route principale, Sen Monorom', prix:'3–7 USD/plat', horaires:'Tous les jours · 7h–20h', desc:'Café de spécialité Mondulkiri, pancakes, plats occidentaux et khmers. Terrasse agréable. Point de rencontre des voyageurs. Excellents smoothies de fruits locaux.'},
        {emoji:'🌿', nom:'Tree Lodge Restaurant', badge:'Vue & Nature ⭐', adresse:'Tree Lodge, Sen Monorom', prix:'5–10 USD/plat', horaires:'Petit-déjeuner & dîner', desc:'Restaurant de l\'écolodge Tree Lodge. Cuisine simple et fraîche. Cadre exceptionnel avec vue panoramique sur les forêts. Idéal au coucher du soleil.'}
      ],
      evenements: [
        {date:'Jan–Fév', nom:'Fête du Nouvel An Lunaire Bunong', desc:'Célébration traditionnelle du peuple Bunong avec sacrifices rituels, chants et danses autour du feu. Occasion rare d\'observer les coutumes ancestrales animistes.'},
        {date:'Nov', nom:'Festival de la Cascade de Bou Sra', desc:'Pèlerinage local et festivités autour des cascades. Offrandes aux esprits de la forêt, musique traditionnelle Bunong et artisanat local.'}
      ],
      loisirs: [
        {icon:'🧘', nom:'Yoga & retraite nature', sub:'Plusieurs écolodges proposent séances de yoga au lever du soleil · Air frais à 800 m d\'altitude'},
        {icon:'🦜', nom:'Observation des oiseaux', sub:'Mondulkiri est un hot-spot ornithologique · Pics, calaos, martins-pêcheurs · Guide spécialisé recommandé'},
        {icon:'🏕', nom:'Camping en forêt', sub:'Nuit sous les étoiles avec guide Bunong · Feu de camp · Écouter la jungle la nuit · ~20–30 USD'},
        {icon:'☕', nom:'Dégustation café local', sub:'Plusieurs coffee farms biologiques autour de Sen Monorom · Café Mondulkiri reconnu pour sa qualité'}
      ],
      scooters: [
        {nom:'Sen Monorom Moto Rental', adresse:'Rue principale, Sen Monorom', tel:'+855 97 558 1234', prix:'8–12', note:'Semi-auto et automatique · Indispensable pour rejoindre les cascades · Pistes rouges exigeantes', lien:'https://wa.me/85597558123'},
        {nom:'Location via guesthouses', adresse:'Plusieurs guesthouses de Sen Monorom', tel:'Demandez à votre hébergement', prix:'8–10', note:'La plupart des guesthouses proposent la location · Vérifiez l\'état avant départ'}
      ],
      coutumes: [
        {icon:'🐘', txt:'<strong>Éléphants éthiques uniquement</strong> : refusez toute balade à dos d\'éléphant. Les sanctuaires éthiques (EVP, Mondulkiri Project) vous permettent d\'observer les animaux librement sans les exploiter.'},
        {icon:'🙏', txt:'<strong>Peuple Bunong</strong> : demandez toujours la permission avant de photographier. Ne touchez pas les totems, autels ou offrandes près des villages. Leur rapport à la nature est sacré.'},
        {icon:'🌿', txt:'<strong>Forêt protégée</strong> : ne cueillez pas de plantes, ne prenez pas de pierres ou d\'objets naturels. La déforestation est une menace réelle — chaque geste compte.'},
        {icon:'🔥', txt:'<strong>Feux de camp</strong> : uniquement dans les zones désignées avec votre guide. La saison sèche (nov–avr) rend la forêt extrêmement vulnérable aux incendies.'}
      ],
      transports: [
        {icon:'🚌', main:'Bus Phnom Penh → Sen Monorom', detail:'6–7h · 10–14 USD · Virak Buntham ou Vy Savy · Routes sinueuses'},
        {icon:'🚐', main:'Minibus partagé depuis PP', detail:'5–6h · ~12 USD · Plus rapide mais moins confortable · Départs tôt le matin'},
        {icon:'🛵', main:'Scooter conseillé sur place', detail:'Routes locales non goudronnées · Indispensable pour cascades et villages · ~10 USD/j'},
        {icon:'🚕', main:'Taxi privé depuis Phnom Penh', detail:'5–6h · ~50–70 USD · Confort · Idéal en groupe de 4'}
      ]
    }
  }; /* FIN CITIES */

/* ─── DONNÉES COMPLÉMENTAIRES : HÉBERGEMENT & ITINÉRAIRES ── */
var CITY_EXTRA = {
  'siem-reap': {
    hotels: [
      {type:'budget', nom:'Onederz Siem Reap', sub:'Hostel central · Piscine & bar rooftop · Street 7 Makara', prix:'12–25', unite:'$/nuit (dorm/chambre)', lien:'https://www.booking.com/hotel/kh/one-stop-hostel-siem-reap-angkor-night-market.html', agoda:'https://www.agoda.com/search?textToSearch=Onederz+Siem+Reap+Cambodia'},
      {type:'mid', nom:"Viroth's Hotel", sub:'Boutique hôtel · Piscine · Petit-déjeuner inclus · Quartier résidentiel', prix:'55–95', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/viroth-hotel-new-wing.html', agoda:'https://www.agoda.com/search?textToSearch=Viroth+Hotel+Siem+Reap+Cambodia'},
      {type:'mid', nom:'Mad Monkey Siem Reap', sub:'Ambiance backpacker · Bar & piscine · Zone Pub Street', prix:'25–50', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/mad-monkey-hostel-siem-reap-krong-siem-reap.html', agoda:'https://www.agoda.com/search?textToSearch=Mad+Monkey+Siem+Reap+Cambodia'},
      {type:'luxury', nom:'Shinta Mani Angkor', sub:'Collection Bensley 5★ · Spa · 2 piscines · Restaurant gastronomique', prix:'185–420', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/shinta-mani.html', agoda:'https://www.agoda.com/search?textToSearch=Shinta+Mani+Angkor+Cambodia'}
    ],
    itineraire: [
      {jour:'Jour 1 — Angkor Wat & Bayon', slots:[
        {time:'5h00', content:'Lever de soleil sur Angkor Wat — reflet du temple dans les bassins. Arrivez 30 min avant.'},
        {time:'8h30', content:'Angkor Thom & le Bayon — 216 visages de pierre souriants. 2–3h de visite.'},
        {time:'12h30', content:'Déjeuner au Haven Restaurant ou street food Old Market.'},
        {time:'14h30', content:'Ta Prohm (lieu de Tomb Raider) — fromagers géants. Banteay Kdei voisin.'},
        {time:'18h30', content:'Pub Street, massage khmer 60 min (~7 USD), cocktail rooftop.'}
      ]},
      {jour:'Jour 2 — Temples lointains & Nature', slots:[
        {time:'Matin', content:'Banteay Srei (30 km) — temple grès rose Xe siècle. Tuk-tuk journée ~15 USD.'},
        {time:'Après-midi', content:'Village flottant du Tonlé Sap — bateau sur le plus grand lac d\'Asie du Sud-Est.'},
        {time:'Soir', content:'Cirque Phare Cambodian Circus (19h30) — réservez à l\'avance.'}
      ]},
      {jour:'Jour 3 — Artisanat & Gastronomie', slots:[
        {time:'Matin', content:'Old Market & Artisans d\'Angkor — soieries, sculptures, épices.'},
        {time:'Midi', content:'Cours de cuisine khmère (3h) — amok, lok lak, salade de papaye verte.'},
        {time:'Après-midi', content:'Vélo dans les villages ruraux ou spa avant départ.'}
      ]}
    ]
  },
  'phnom-penh': {
    hotels: [
      {type:'budget', nom:'Mad Monkey Phnom Penh', sub:'Hostel animé · Piscine & rooftop bar · BKK1 area', prix:'10–22', unite:'$/nuit (dorm/chambre)', lien:'https://www.booking.com/hotel/kh/mad-monkey-hostel-phnom-penh-phnom-penh.html', agoda:'https://www.agoda.com/search?textToSearch=Mad+Monkey+Phnom+Penh+Cambodia'},
      {type:'mid', nom:'Baitong Hotel & Resort', sub:'Boutique sur le Tonlé Bassac · Piscine · Vue rivière', prix:'50–90', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/baitong-amp-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Baitong+Hotel+Phnom+Penh+Cambodia'},
      {type:'mid', nom:'The Pavilion', sub:'Maison coloniale rénovée · Piscine · Quartier Daun Penh', prix:'55–100', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/the-pavilion-phnom-penh.html', agoda:'https://www.agoda.com/search?textToSearch=The+Pavilion+Phnom+Penh+Cambodia'},
      {type:'luxury', nom:'Rosewood Phnom Penh', sub:'5★ au sommet du Vattanac Tower · Spa · Panorama 360° sur la ville', prix:'250–600', unite:'$/nuit'}
    ],
    itineraire: [
      {jour:'Jour 1 — Histoire & Mémoire', slots:[
        {time:'Matin', content:'Musée du Génocide Tuol Sleng (S-21) — moment de recueillement indispensable. 2h de visite.'},
        {time:'12h30', content:'Déjeuner au Friends Restaurant — restaurant solidaire formant des jeunes défavorisés.'},
        {time:'14h00', content:'Palais Royal & Pagode d\'Argent — architecture khmère splendide. Tenue correcte exigée.'},
        {time:'17h00', content:'Promenade sur le Sisowath Quay au coucher du soleil. Bière Angkor en terrasse.'}
      ]},
      {jour:'Jour 2 — Marchés & Quartiers', slots:[
        {time:'Matin', content:'Marché Central (Psar Thmei) — dôme Art Déco années 1930. Bijoux, textiles, souvenirs.'},
        {time:'Après-midi', content:'Russian Market (Psar Tuol Tom Pong) — vêtements, antiquités, street food locale.'},
        {time:'Soir', content:'Street food à BKK1 puis bar rooftop avec vue sur Phnom Penh by night.'}
      ]},
      {jour:'Jour 3 — Fleuve & Gastronomie', slots:[
        {time:'Matin', content:'Croisière sur le Mékong (2h) — confluence Tonlé Sap. Lever du soleil magique.'},
        {time:'Midi', content:'Cours de cuisine khmère dans un restaurant local — amok et khmer curry.'},
        {time:'Après-midi', content:'Musée National — trésors de l\'art khmer du IXe au XIVe siècle.'}
      ]}
    ]
  },
  'battambang': {
    hotels: [
      {type:'budget', nom:'Here Be Dragons', sub:'Hostel convivial · Vélos à disposition · Centre-ville', prix:'8–18', unite:'$/nuit (dorm)', lien:'https://www.booking.com/hotel/kh/here-be-dragons.html', agoda:'https://www.agoda.com/search?textToSearch=Here+Be+Dragons+Battambang+Cambodia'},
      {type:'mid', nom:'Bambu Hotel', sub:'Boutique hôtel · Piscine · Ambiance artistique · Quartier français', prix:'35–65', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/bambu.html', agoda:'https://www.agoda.com/search?textToSearch=Bambu+Hotel+Battambang+Cambodia'},
      {type:'mid', nom:'La Villa Hotel', sub:'Villa coloniale française rénovée · Jardin · Petit-déjeuner inclus', prix:'45–80', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/la-villa.html', agoda:'https://www.agoda.com/search?textToSearch=La+Villa+Hotel+Battambang+Cambodia'},
      {type:'luxury', nom:'Maisons Wat Kor', sub:'Demeures khmères traditionnelles du XIXe · Immersion culturelle unique', prix:'90–150', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/maisons-wat-kor.html', agoda:'https://www.agoda.com/search?textToSearch=Maisons+Wat+Kor+Battambang+Cambodia'}
    ],
    itineraire: [
      {jour:'Jour 1 — Train de bambou & Temples', slots:[
        {time:'Matin', content:'Train de bambou (Norry) — balade unique sur voie ferrée coloniale. ~5 USD/pers.'},
        {time:'Après-midi', content:'Temples de Phnom Banan (11 km) — escalier de 358 marches, vue panoramique.'},
        {time:'Soir', content:'Cirque Phare de Battambang (19h30) — berceau du cirque cambodgien.'}
      ]},
      {jour:'Jour 2 — Art de rue & Villages', slots:[
        {time:'Matin', content:'Street art du quartier français — fresques murales des artistes locaux à vélo.'},
        {time:'Après-midi', content:'Village de fabrication du vin de palme & de sauce de poisson — artisanat authentique.'},
        {time:'Soir', content:'Marché nocturne de Battambang — poissons du Tonlé Sap grillés, sucreries locales.'}
      ]}
    ]
  },
  'kampot': {
    hotels: [
      {type:'budget', nom:'Magic Sponge', sub:'Guesthouse bohème au bord de la rivière · Hamacs & kayaks', prix:'8–20', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/the-magic-sponge.html', agoda:'https://www.agoda.com/search?textToSearch=Magic+Sponge+Kampot+Cambodia'},
      {type:'mid', nom:'Mea Culpa', sub:'Boutique hôtel colonial · Piscine · Vue rivière · Centre Kampot', prix:'35–65', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/mea-culpa-kampot.html', agoda:'https://www.agoda.com/mea-culpa-kampot/hotel/kampot-kh.html'},
      {type:'mid', nom:'Rikitikitavi', sub:'Bâtisse coloniale rénovée · Restaurant sur la rivière · Très bonne cuisine', prix:'40–75', unite:'$/nuit'},
      {type:'luxury', nom:'Knai Bang Chatt', sub:'Resort boutique 5★ · Piscine à débordement · Voiliers · Vue mer & mangroves', prix:'130–280', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/knai-bang-chatt-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Knai+Bang+Chatt+Cambodia'}
    ],
    itineraire: [
      {jour:'Jour 1 — Rivière & Poivre', slots:[
        {time:'Matin', content:'Plantation de poivre de Kampot — visite guidée, dégustation, achat direct producteur.'},
        {time:'Après-midi', content:'Kayak sur la rivière Kampot — mangroves, villages flottants, dauphins d\'eau douce.'},
        {time:'Soir', content:'Happy hour au bord de la rivière. Coucher de soleil sur les montagnes de l\'Éléphant.'}
      ]},
      {jour:'Jour 2 — Bokor & Côte', slots:[
        {time:'Matin', content:'Station fantôme de Bokor Hill (1 000 m) — casino colonial abandonné dans les nuages. Moto ou taxi.'},
        {time:'Après-midi', content:'Plage de Kep (30 min) — crabes du marché de Kep directement grillés sur la plage.'},
        {time:'Soir', content:'Marché nocturne de Kampot — currys, brochettes, bières Angkor.'}
      ]}
    ]
  },
  'sihanoukville': {
    hotels: [
      {type:'budget', nom:'Sokha Beach Guesthouse', sub:'Proche plage Otres · Propre & abordable · Ambiance détendue', prix:'12–25', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Sokha+Beach+Guesthouse+Sihanoukville+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=Sokha+Beach+Guesthouse+Sihanoukville+Cambodia'},
      {type:'mid', nom:'Otres Village Bungalows', sub:'Bungalows en bois sur Otres Beach · Piscine · Resto sur place', prix:'35–70', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Otres+Village+Bungalows+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=Otres+Village+Bungalows+Cambodia'},
      {type:'mid', nom:'Serendipity Beach Resort', sub:'Directement sur la plage Serendipity · Bar & piscine · Vue mer', prix:'45–85', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/serendipity-beach-resort.html', agoda:'https://www.agoda.com/serendipity-beach-resort/hotel/sihanoukville-kh.html'},
      {type:'luxury', nom:'Sokha Beach Resort', sub:'Resort 5★ · 1,5 km de plage privée · 4 piscines · Spa & casino', prix:'120–300', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/sokha-beach-resort.html', agoda:'https://www.agoda.com/sokha-beach-resort/hotel/sihanoukville-kh.html'}
    ],
    itineraire: [
      {jour:'Jour 1 — Plages & Sunset', slots:[
        {time:'Matin', content:'Plage d\'Otres (6 km) — la plus belle et la plus calme de Sihanoukville. Hamac & lecture.'},
        {time:'Après-midi', content:'Snorkeling depuis la plage · Location palmes-masque ~3 USD.'},
        {time:'Soir', content:'Coucher de soleil depuis le Victory Hill. Street food & Angkor draft.'}
      ]},
      {jour:'Jour 2 — Îles day trip', slots:[
        {time:'Matin', content:'Bateau pour Koh Rong Sanloem (45 min) — journée plage paradisiaque. Retour le soir.'},
        {time:'Soir', content:'Marché nocturne de Serendipity Beach — crabes, homards, poissons grillés.'}
      ]}
    ]
  },
  'kep': {
    hotels: [
      {type:'budget', nom:'Botanica Guesthouse', sub:'Jardin verdoyant · Hamacs · À 5 min du marché aux crabes', prix:'15–30', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/botanica-bungalow.html', agoda:'https://www.agoda.com/search?textToSearch=Botanica+Guesthouse+Kep+Cambodia'},
      {type:'mid', nom:'Veranda Natural Resort', sub:'Bungalows dans la jungle · Vue mer · Piscine naturelle', prix:'45–90', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/veranda-natural-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Veranda+Natural+Resort+Kep+Cambodia'},
      {type:'mid', nom:'Kep Lodge', sub:'Villas coloniales sur colline · Vue panoramique · Piscine', prix:'50–100', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/kep-lodge.html', agoda:'https://www.agoda.com/search?textToSearch=Kep+Lodge+Cambodia'},
      {type:'luxury', nom:'Knai Bang Chatt', sub:'5★ · Voiliers vintage · Piscine à débordement · Vue golfe de Thaïlande', prix:'150–320', unite:'$/nuit'}
    ],
    itineraire: [
      {jour:'Jour 1 — Crabes & Détente', slots:[
        {time:'Matin', content:'Marché aux crabes de Kep — achetez des crabes frais, faites-les cuire sur place au beurre et au poivre de Kampot.'},
        {time:'Après-midi', content:'Parc national de Kep — sentiers en forêt jusqu\'à la plage cachée. Singes sauvages.'},
        {time:'Soir', content:'Coucher de soleil depuis la statue de la femme au bord de l\'eau.'}
      ]},
      {jour:'Jour 2 — Île de Koh Tonsay', slots:[
        {time:'Matin', content:'Bateau pour Rabbit Island (Koh Tonsay) — 15 min · plage vierge · bungalows rustiques.'},
        {time:'Journée', content:'Farniente sur la plage · snorkeling · déjeuner de poissons grillés dans un restaurant de plage.'},
        {time:'Retour', content:'Bateau retour vers 16h30. Massage en soirée (~8 USD l\'heure).'}
      ]}
    ]
  },
  'koh-rong': {
    hotels: [
      {type:'budget', nom:'The Cove Koh Rong', sub:'Bungalows basiques · Directement sur la plage · Atmosphère bohème', prix:'15–30', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=The+Cove+Koh+Rong+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=The+Cove+Koh+Rong+Cambodia'},
      {type:'mid', nom:'Nest Beach Club', sub:'Bungalows & tentes glamping · Bar-restaurant sur la plage · Village de Koh Touch', prix:'35–70', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/nest-beach-club.html', agoda:'https://www.agoda.com/search?textToSearch=Nest+Beach+Club+Koh+Rong+Cambodia'},
      {type:'mid', nom:'Tree House Bungalows', sub:'Bungalows dans la jungle · Vue mer · Long Beach (4P Beach)', prix:'30–60', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/tree-house.html', agoda:'https://www.agoda.com/search?textToSearch=Tree+House+Bungalows+Koh+Rong+Cambodia'},
      {type:'luxury', nom:'Song Saa Private Island', sub:'Resort ultra-luxe sur île privée · Villas sur pilotis · Plongée & spa', prix:'500–1200', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/song-saa-private-island.html', agoda:'https://www.agoda.com/search?textToSearch=Song+Saa+Private+Island+Cambodia'}
    ],
    itineraire: [
      {jour:'Jour 1 — Arrivée & Plongée', slots:[
        {time:'Matin', content:'Ferry depuis Sihanoukville (1h15). Installation au Village de Koh Touch.'},
        {time:'Après-midi', content:'Snorkeling & plongée — récifs coralliens à 5 min du bord. Location équipement ~8 USD.'},
        {time:'Nuit', content:'Bioluminescence — plongez dans l\'eau après 22h pour voir le plancton lumineux. Phénomène unique.'}
      ]},
      {jour:'Jour 2 — Exploration & 4P Beach', slots:[
        {time:'Matin', content:'Randonnée jusqu\'à Long Beach (4 Population Beach) — la plus belle plage de l\'île, souvent déserte.'},
        {time:'Après-midi', content:'Village de Koh Touch — kayak, paddle, lézarder. Cocktails dans les beach bars.'},
        {time:'Soir', content:'Barbecue de fruits de mer sur la plage. Feu de camp.'}
      ]}
    ]
  },
  'koh-rong-sanloem': {
    hotels: [
      {type:'budget', nom:'Lazy Beach Bungalows', sub:'Bungalows en bois sur Lazy Beach · Soleil couchant · Dépaysement total', prix:'25–45', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/lazybeach.html', agoda:'https://www.agoda.com/search?textToSearch=Lazy+Beach+Bungalows+Koh+Rong+Sanloem+Cambodia'},
      {type:'mid', nom:'Huba Huba Resort', sub:'Bungalows balinais · Plage de Saracen Bay · Snorkeling devant l\'hôtel', prix:'40–80', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Huba+Huba+Resort+Koh+Rong+Sanloem+Cambodia', agoda:'https://www.agoda.com/huba-huba-bungalow/hotel/koh-rong-sanloem-kh.html'},
      {type:'mid', nom:'Saracen Bay Resort', sub:'Bungalows sur pilotis · Meilleure plage de l\'île · Restaurant & bar', prix:'45–90', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/saracen-bay-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Saracen+Bay+Resort+Koh+Rong+Sanloem+Cambodia'},
      {type:'luxury', nom:'Song Saa Private Island', sub:'Éco-resort 5★ · Villas sur l\'eau · Corail protégé · Bien-être total', prix:'500–1200', unite:'$/nuit'}
    ],
    itineraire: [
      {jour:'Jour 1 — Saracen Bay', slots:[
        {time:'Matin', content:'Ferry depuis Sihanoukville (1h). Saracen Bay — eau turquoise calme, sable blanc fin.'},
        {time:'Après-midi', content:'Snorkeling sur le récif corallien devant Saracen Bay. Tortues et raies fréquentes.'},
        {time:'Soir', content:'Dîner de fruits de mer au restaurant de l\'hôtel. Ciel étoilé sans pollution lumineuse.'}
      ]},
      {jour:'Jour 2 — Lazy Beach & Mangroves', slots:[
        {time:'Matin', content:'Trekking (1h) jusqu\'à Lazy Beach côté ouest — coucher de soleil à l\'aller, lever au retour.'},
        {time:'Après-midi', content:'Kayak dans les mangroves — observation des oiseaux et de la faune marine.'},
        {time:'Soir', content:'Bioluminescence depuis la plage (nuit sans lune recommandée).'}
      ]}
    ]
  },
  'poipet': {
    hotels: [
      {type:'budget', nom:'Grand Diamond City Hotel', sub:'Hôtel standard · Casino · À 200m de la frontière thaïlandaise', prix:'20–35', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/grand-diamond-city.html', agoda:'https://www.agoda.com/grand-diamond-city-hotel-and-casino/hotel/ou-chrov-kh.html'},
      {type:'mid', nom:'Holiday Palace Resort', sub:'Complexe casino-hôtel · Piscine · Restaurant · Zone franche', prix:'40–70', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/holiday-palace-casino-amp-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Holiday+Palace+Resort+Poipet+Cambodia'},
      {type:'mid', nom:'Poipet Resort Casino', sub:'Resort complet · Navette gratuite frontière · Buffet inclus', prix:'45–80', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Poipet+Resort+Casino+Cambodia', agoda:'https://www.agoda.com/poipet-resort-casino/hotel/ou-chrov-kh.html'},
      {type:'luxury', nom:'NagaWorld Poipet', sub:'5★ · Casino & spa · Convention center · Restaurant international', prix:'90–180', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=NagaWorld+Poipet+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=NagaWorld+Poipet+Cambodia'}
    ],
    itineraire: [
      {jour:'Étape transit Bangkok → Cambodge', slots:[
        {time:'Matin', content:'Arrivée depuis Bangkok en bus (3–4h depuis Mo Chit) ou train + songthaew depuis Aranyaprathet.'},
        {time:'Frontière', content:'Poste frontière O\'Smach — ouverte 7h–22h. Visa à l\'arrivée : 30 USD + photo. File parfois longue.'},
        {time:'Après-midi', content:'Bus direct Poipet → Siem Reap (3h) ou Phnom Penh (5–6h). Réservez en avance en haute saison.'},
        {time:'Conseil', content:'Ignorez les "helpers" non officiels à la frontière. Utilisez les guichets officiels uniquement.'}
      ]},
      {jour:'Si vous restez 1 nuit', slots:[
        {time:'Soir', content:'Casino de Poipet — unique attraction de la ville. Ambiance particulière, réservé aux adultes.'},
        {time:'Matin', content:'Marché de Poipet — textile et produits locaux à bas prix. Très animé dès 6h.'}
      ]}
    ]
  },
  'pursat': {
    hotels: [
      {type:'budget', nom:'Pursat Riverside Guesthouse', sub:'Sur les bords du Pursat River · Propre & calme · Accueil familial', prix:'10–20', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Pursat+Riverside+Guesthouse+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=Pursat+Riverside+Guesthouse+Cambodia'},
      {type:'mid', nom:'Lux Riverside Hotel', sub:'Meilleur hôtel de la ville · Restaurant · Bord de rivière', prix:'30–55', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Lux+Riverside+Hotel+Pursat+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=Lux+Riverside+Hotel+Pursat+Cambodia'},
      {type:'mid', nom:'Chi Phat Eco-Lodge', sub:'Lodges communautaires dans la forêt de Chi Phat · Expérience unique', prix:'20–40', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/chi-phat-river-lodge.html', agoda:'https://www.agoda.com/search?textToSearch=Chi+Phat+Eco+Lodge+Cambodia'},
      {type:'luxury', nom:'Cardamom Tented Camp', sub:'Éco-camp dans la forêt vierge des Cardamomes · Tentes luxe · Trek guidé', prix:'120–250', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/cardamom-tented-camp.html', agoda:'https://www.agoda.com/cardamom-tented-camp/hotel/koh-kong-kh.html'}
    ],
    itineraire: [
      {jour:'Jour 1 — Tonlé Sap & Marbre', slots:[
        {time:'Matin', content:'Village flottant du Tonlé Sap (Kampong Luong) — bateau depuis les berges. 2h de balade.'},
        {time:'Après-midi', content:'Ateliers de sculpture sur marbre de Pursat — artisans travaillent le marbre depuis des générations.'},
        {time:'Soir', content:'Promenade au bord de la rivière Pursat. Marché du soir.'}
      ]},
      {jour:'Jour 2 — Chi Phat & Cardamomes', slots:[
        {time:'Journée', content:'Chi Phat (2h de Pursat) — trek en forêt avec guide local. Village écotouristique communautaire.'},
        {time:'Activités', content:'Randonnée, observation d\'oiseaux, kayak dans les rivières des Cardamomes. Nuitée possible.'},
        {time:'Conseil', content:'Réservez à l\'avance via la communauté Chi Phat sur chi-phat.org · Min. 2 personnes.'}
      ]}
    ]
  },
  'mondulkiri': {
    hotels: [
      {type:'budget', nom:'Tree Lodge Sen Monorom', sub:'Bungalows en bois · Vue panoramique sur la vallée · Ambiance écolodge', prix:'18–35', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/tree-lodge.html', agoda:'https://www.agoda.com/search?textToSearch=Tree+Lodge+Sen+Monorom+Cambodia'},
      {type:'mid', nom:'Mayura Hill Resort', sub:'Villas sur colline · Piscine · Restaurant · Vue forêt · Centre Sen Monorom', prix:'40–75', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/mayura-hill-resort.html', agoda:'https://www.agoda.com/search?textToSearch=Mayura+Hill+Resort+Mondulkiri+Cambodia'},
      {type:'mid', nom:'Prea Phneou Resort', sub:'Bungalows dans un jardin fleuri · Calme absolu · À 5 min du centre', prix:'35–65', unite:'$/nuit', lien:'https://www.booking.com/search.html?ss=Prea+Phneou+Resort+Mondulkiri+Cambodia', agoda:'https://www.agoda.com/search?textToSearch=Prea+Phneou+Resort+Mondulkiri+Cambodia'},
      {type:'luxury', nom:'Mondulkiri Resort & Spa', sub:'Resort boutique · Spa · Piscine · Excursions éléphants organisées · Vue forêt', prix:'80–160', unite:'$/nuit', lien:'https://www.booking.com/hotel/kh/emario-mondulkiri-resort.html', agoda:'https://www.agoda.com/emario-mondulkiri-resort/hotel/sen-monorom-kh.html'}
    ],
    itineraire: [
      {jour:'Jour 1 — Éléphants & Forêt', slots:[
        {time:'Matin', content:'Elephant Valley Project — observation des éléphants en liberté dans la forêt. Demi-journée avec guide. Réservez à l\'avance sur elephantvalleyproject.org'},
        {time:'Après-midi', content:'Balade en scooter sur les pistes rouges vers les villages Bunong aux alentours de Sen Monorom.'},
        {time:'Soir', content:'Coucher de soleil depuis la colline de Sen Monorom — vue sur les forêts de pins à perte de vue.'}
      ]},
      {jour:'Jour 2 — Cascades & Culture Bunong', slots:[
        {time:'Matin', content:'Cascades de Bou Sra (25 km) — deux niveaux de chutes, baignade possible dans la vasque. Piste en scooter ou taxi (~15 USD).'},
        {time:'Après-midi', content:'Village Bunong de Phulung — découverte des traditions animistes avec guide local. Artisanat et café de la région.'},
        {time:'Soir', content:'Dégustation de café Mondulkiri dans une coffee farm bio · Feu de camp si nuit en écolodge.'}
      ]}
    ]
  }
}; /* FIN CITY_EXTRA */
