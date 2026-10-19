/* ===== Agenda des événements (page #events + ancienne page evenements/) =====
   Tout est calculé à l'affichage : la semaine montrée change seule chaque lundi (heure du Cambodge).
   - EVT_FIXED  : jours fériés à date fixe, répétés automatiquement chaque année.
   - EVT_DATED  : fêtes lunaires (dates officielles différentes chaque année) et événements ponctuels.
                  Le gouvernement publie les jours fériés de l'année suivante vers mi-septembre :
                  ajouter alors les fêtes lunaires de la nouvelle année ici (EVT_YEARS_OK aussi).
   - EVT_WEEKLY : rendez-vous réguliers (days : 0 = dimanche … 6 = samedi), from/to optionnels.
   pts : [[lat, lon, "nom du lieu"], …] pour la carte (coordonnées OpenStreetMap). Sans pts, un événement
         lié à une province est placé au centre de la province, marqué « lieu exact non communiqué ».
   Règle : n'ajouter que des informations vérifiées, avec leur source (src). */
const EVT_SRC_FERIES_2026="https://emerhub.com/cambodia/public-holidays-in-cambodia/";
const EVT_SRC_FERIES_2027="https://cambodianess.com/article/cambodia-has-22-public-holidays-in-2027";
const EVT_YEARS_OK=[2026,2027];
const EVT_CATS={national:["Fête nationale","🇰🇭"],religion:["Fête religieuse","🙏"],festival:["Festival","🎉"],sport:["Sport","🏃"],culture:["Culture & sorties","🎭"],bonplan:["Bon plan","💡"]};

const EVT_FIXED=[
 {md:"01-01",titre:"Jour de l'An international",cat:"national",emoji:"🎆",desc:"Jour férié dans tout le pays."},
 {md:"01-07",titre:"Jour de la victoire sur le génocide",cat:"national",emoji:"🕊️",desc:"Jour férié : commémoration de la chute du régime khmer rouge, le 7 janvier 1979."},
 {md:"03-08",titre:"Journée internationale des femmes",cat:"national",emoji:"💐",desc:"Jour férié dans tout le pays."},
 {md:"05-01",titre:"Fête du Travail",cat:"national",emoji:"🛠️",desc:"Jour férié dans tout le pays."},
 {md:"05-14",titre:"Anniversaire du roi Norodom Sihamoni",cat:"national",emoji:"👑",desc:"Jour férié dans tout le pays."},
 {md:"06-18",titre:"Anniversaire de la reine mère Norodom Monineath",cat:"national",emoji:"👑",desc:"Jour férié dans tout le pays."},
 {md:"09-24",titre:"Fête de la Constitution",cat:"national",emoji:"📜",desc:"Jour férié : anniversaire de la Constitution de 1993."},
 {md:"10-15",titre:"Commémoration du roi père Norodom Sihanouk",cat:"national",emoji:"🕯️",desc:"Jour férié en mémoire du roi père, décédé le 15 octobre 2012."},
 {md:"10-29",titre:"Anniversaire du couronnement du roi",cat:"national",emoji:"👑",desc:"Jour férié : couronnement du roi Norodom Sihamoni, le 29 octobre 2004."},
 {md:"11-09",titre:"Fête de l'Indépendance",cat:"national",emoji:"🇰🇭",desc:"Jour férié : indépendance obtenue de la France le 9 novembre 1953. Cérémonie officielle au monument de l'Indépendance, à Phnom Penh."},
 {md:"12-29",titre:"Journée de la paix",cat:"national",emoji:"🕊️",desc:"Jour férié dans tout le pays."}
].map(e=>Object.assign({ville:"all",pts:[[11.5564,104.9282,"Cérémonie au monument de l'Indépendance"]],src:[EVT_SRC_FERIES_2026,EVT_SRC_FERIES_2027]},e));

const NY={titre:"Nouvel An khmer (Chaul Chnam Thmey)",ville:"all",cat:"religion",emoji:"🎉",desc:"La plus grande fête de l'année : 3 jours fériés. Beaucoup de Cambodgiens rentrent dans leur village, les pagodes sont très fréquentées et on s'asperge d'eau dans les rues. Commerces souvent fermés, transports pris d'assaut."};
const VISAK={titre:"Visak Bochea",ville:"all",cat:"religion",emoji:"☸️",desc:"Jour férié bouddhiste (naissance, éveil et mort du Bouddha). Offrandes et processions aux chandelles dans les pagodes."};
const PLOUGH={titre:"Cérémonie royale du labour (Preah Reach Pithi Chrat Preah Neangkol)",ville:"all",cat:"religion",emoji:"🐂",desc:"Jour férié qui ouvre la saison des pluies et des rizières : selon ce que mangent les bœufs royaux, on prédit la récolte de l'année. Le lieu de la cérémonie est annoncé chaque année."};
const PCHUM={titre:"Pchum Ben, fête des ancêtres",ville:"all",cat:"religion",emoji:"🙏",desc:"Les 3 jours fériés qui terminent 15 jours d'offrandes aux ancêtres. Les familles vont à la pagode avant l'aube, beaucoup rentrent dans leur province : grosse affluence sur les routes et dans les bus."};
const WATER={titre:"Fête des eaux (Bon Om Touk)",ville:"all",pts:[[11.5640,104.9318,"Courses de pirogues devant le Palais royal"]],cat:"festival",emoji:"🚣",desc:"3 jours fériés. À Phnom Penh, courses de pirogues sur le Tonlé Sap devant le Palais royal, bateaux illuminés le soir. Énorme foule sur les quais : réserver son hébergement tôt."};
const f26={src:[EVT_SRC_FERIES_2026]},f27={src:[EVT_SRC_FERIES_2027]};

const EVT_DATED=[
 // 2026 (sous-décret n° 167)
 Object.assign({date:"2026-04-14",fin:"2026-04-16"},NY,f26),
 Object.assign({date:"2026-05-01"},VISAK,f26),
 Object.assign({date:"2026-05-05"},PLOUGH,f26),
 Object.assign({date:"2026-10-10",fin:"2026-10-12"},PCHUM,f26),
 Object.assign({date:"2026-11-23",fin:"2026-11-25"},WATER,f26),
 // 2027 (sous-décret signé le 16 septembre 2026)
 Object.assign({date:"2027-04-14",fin:"2027-04-16"},NY,f27),
 Object.assign({date:"2027-05-20"},VISAK,{src:["https://calendarific.com/holidays/2027/KH"]}),
 Object.assign({date:"2027-05-24"},PLOUGH,{src:["https://calendarific.com/holidays/2027/KH"]}),
 Object.assign({date:"2027-09-29",fin:"2027-10-01"},PCHUM,f27),
 Object.assign({date:"2027-11-12",fin:"2027-11-14"},WATER,f27),
 // événements ponctuels
 {date:"2026-11-01",titre:"Bonjour Cambodge Fun Run",ville:"phnom-penh",cat:"sport",emoji:"🏃",heure:"5h – 8h (départ du 10 km à 6h, du 5 km à 6h15)",lieu:"Phnom Penh City Center",desc:"Course populaire de 5 ou 10 km organisée pour le 20e Sommet de la Francophonie, ouverte à tous. Inscription en ligne ; tarif encore à confirmer par les organisateurs.",pts:[[11.5773,104.9097,"Phnom Penh City Center"]],src:["https://www.cambodgemag.com/en/post/phnom-penh-city-center-hosts-the-bonjour-cambodge-fun-run-2026-to-celebrate-the-20th-francophonie-su"]},
 {date:"2026-11-17",fin:"2026-11-19",titre:"Festival international de cirque Tini Tinou",ville:"siem-reap",cat:"festival",emoji:"🤹",lieu:"Chapiteau Phare et lieux éphémères en ville",desc:"Festival de cirque avec des troupes du monde entier, organisé par l'école Phare Ponleu Selpak. Spectacles payants et animations dans la ville. Il continue ensuite à Battambang.",pts:[[13.3539,103.8390,"Chapiteau Phare, Siem Reap"]],src:["https://phareps.org/festivals/tini-tinou-circus-festival/"]},
 {date:"2026-11-21",fin:"2026-11-24",titre:"Festival international de cirque Tini Tinou",ville:"battambang",cat:"festival",emoji:"🤹",lieu:"Campus de Phare Ponleu Selpak et rues du centre historique",desc:"Le festival de cirque à domicile, chez Phare Ponleu Selpak : spectacles payants, spectacles de rue et grande parade de cirque dans le quartier historique.",pts:[[13.1119,103.1856,"Campus Phare Ponleu Selpak"]],src:["https://phareps.org/festivals/tini-tinou-circus-festival/"]},
 {date:"2026-12-18",fin:"2026-12-20",titre:"Fête de la mer (12e édition)",ville:"sihanoukville",cat:"festival",emoji:"🌊",desc:"Grande fête nationale de la côte, organisée chaque année dans une des 4 provinces côtières (cette année : Preah Sihanouk). Thème 2026 : l'économie bleue et la biodiversité du littoral. Forte affluence : réserver l'hébergement tôt.",src:["https://www.akp.gov.kh/post/detail/369960"]},
 {date:"2027-02-06",titre:"Nouvel An chinois",ville:"all",cat:"culture",emoji:"🧧",desc:"Pas un jour férié officiel, mais très fêté par les familles sino-khmères, surtout à Phnom Penh : beaucoup de commerces ferment quelques jours.",src:["https://izitour.com/en/blog/cambodia-festivals"]},
 {date:"2026-12-06",titre:"Semi-marathon international d'Angkor Wat",ville:"siem-reap",cat:"sport",emoji:"🏅",heure:"5h – 10h30",lieu:"Départ devant Angkor Wat",desc:"31e édition. Distances : 21 km, 10 km, 5 km et 3 km. Inscription obligatoire à l'avance ; routes du parc d'Angkor perturbées le matin.",pts:[[13.4125,103.8666,"Départ devant Angkor Wat"]],src:["https://angkorhospital.org/angkor-wat-international-half-marathon-2026/"]}
];

const EVT_WEEKLY=[
 {days:[6,0],titre:"Walk Street : quais piétons de Phnom Penh",ville:"phnom-penh",cat:"bonplan",emoji:"🚶",heure:"18h – 23h",lieu:"Quai Sisowath, de la Poste au Palais royal",desc:"Chaque week-end, les quais sont fermés aux voitures : stands de cuisine de rue, spectacles et promenade au bord du fleuve. Entrée libre.",pts:[[11.5700,104.9296,"Quai Sisowath piéton"]],src:["https://cambodianess.com/article/walking-street-to-open-for-public-leisure"]},
 {days:[5,6,0],titre:"Marché de nuit de Phnom Penh (Phsar Reatrey)",ville:"phnom-penh",cat:"bonplan",emoji:"🏮",heure:"17h – 23h",lieu:"Quai Sisowath, entre les rues 106 et 108",desc:"Vêtements, souvenirs et surtout un grand espace de cuisine de rue où l'on mange assis sur des nattes. Bon plan pour dîner pas cher le week-end.",pts:[[11.5743,104.9278,"Marché de nuit"]],src:["https://phnompenhnightmarket.com/en/"]},
 {days:[5,6],titre:"Sovanna Phum : théâtre d'ombres et danses khmères",ville:"phnom-penh",cat:"culture",emoji:"🎭",heure:"19h30",lieu:"166, rue 99, Phnom Penh",desc:"Théâtre d'ombres, danse apsara, danses masquées et musique traditionnelle par une troupe cambodgienne. Horaires à confirmer avant d'y aller : (023) 987 564.",pts:[[11.5327,104.9226,"Théâtre Sovanna Phum"]],src:["https://www.tourismcambodia.com/activities/cultural-explorations/sovanna-phum.htm"]},
 {days:[1,3,4,6],titre:"Cirque Phare Ponleu Selpak",ville:"battambang",cat:"culture",emoji:"🎪",heure:"19h (café ouvert dès 18h)",lieu:"Campus Phare Ponleu Selpak, Battambang",desc:"Le cirque de l'école d'art où est né Phare. 16 $ adulte, 9 $ enfant (5-11 ans). Le programme peut changer : vérifier sur le site avant de venir.",pts:[[13.1119,103.1856,"Campus Phare Ponleu Selpak"]],src:["https://phareps.org/circus-shows/"]},
 {days:[0,1,2,3,4,5,6],titre:"Marché aux crabes de Kep",ville:"kep",cat:"bonplan",emoji:"🦀",heure:"5h – 17h30 (le plus frais tôt le matin)",lieu:"Front de mer de Kep",desc:"On y voit arriver les pêcheurs avec la pêche du jour, et on y mange le fameux crabe de Kep au poivre, préparé sur place. Arriver tôt pour le meilleur choix : le marché se vide au fil des ventes.",pts:[[10.4889,104.2889,"Marché aux crabes"]],src:["https://cambodiaspirit.com/place/crab-market/"]},
 {days:[0,1,2,3,4,5,6],titre:"Marché de nuit d'Angkor (ANM Khmer Market)",ville:"siem-reap",cat:"bonplan",emoji:"🏮",heure:"Le soir, à partir de 17h",lieu:"Rue Sivatha, centre de Siem Reap",desc:"Artisanat, peintures, vêtements et souvenirs, à deux pas de Pub Street. Penser à négocier les prix.",pts:[[13.3561,103.8520,"ANM Khmer Market"]],src:["https://helloangkor.com/the-markets-of-siem-reap/"]},
 {days:[0,1,2,3,4,5,6],titre:"Train de bambou (norry) de Battambang",ville:"battambang",cat:"culture",emoji:"🚃",heure:"Environ 7 h 30 – 17 h 30",lieu:"Gare touristique au sud-est de Battambang",pts:[[13.0186,103.2432,"Départ du train de bambou"]],desc:"Une plateforme de bambou sur rails file à travers les rizières, environ 15 minutes dans chaque sens, sur un tronçon touristique reconstruit. Environ 5 USD par personne.",src:["https://cambodiaspirit.com/place/bamboo-train-battambang/"]},
 {days:[0,1,2,3,4,5,6],titre:"Dauphins de l'Irrawaddy à Kampi",ville:"kratie",cat:"culture",emoji:"🐬",heure:"En journée, dernier bateau vers 17 h (meilleurs moments : 7 h – 9 h et 16 h – 18 h)",lieu:"Kampi, à environ 15 km au nord de Kratie",pts:[[12.6071,106.0028,"Embarcadère des dauphins de Kampi"]],desc:"Observation en barque, pendant environ une heure, de l'un des derniers groupes de dauphins d'eau douce du Mékong, espèce en danger critique. Tarif fixé par la coopérative locale : environ 9 à 11 USD par personne pour 1 à 2 passagers.",src:["https://www.visittocambodia.com/2025/09/kampi-dolphin-pool-guide-to-seeing.html"]},
 {days:[0,1,2,3,4,5,6],titre:"Marché de nuit de Kampot",ville:"kampot",cat:"bonplan",emoji:"🏮",heure:"Le soir (le plus animé vers 18 h 30 – 21 h)",lieu:"Centre de Kampot, près de la rivière",pts:[[10.6114,104.1814,"Marché de nuit de Kampot"]],desc:"Stands de cuisine de rue, de vêtements et de souvenirs : une bonne adresse pour dîner pas cher.",src:["https://seniworld.com/kampot-night-market/"]},
 {days:[0,1,2,3,4,5,6],titre:"Phare, le cirque cambodgien",ville:"siem-reap",cat:"culture",emoji:"🎪",heure:"20h (accueil dès 17h30)",lieu:"Chapiteau Phare, Siem Reap",desc:"Spectacle de cirque et de théâtre par de jeunes artistes cambodgiens, environ 1 h. Payant, réservation conseillée.",pts:[[13.3539,103.8390,"Chapiteau Phare"]],src:["https://pharecircus.org/"]},
 {days:[3,5,0],from:"2026-11-01",to:"2027-03-31",titre:"Phare, le cirque cambodgien : séance de 17h",ville:"siem-reap",cat:"culture",emoji:"🎪",heure:"17h",lieu:"Chapiteau Phare, Siem Reap",desc:"Séance supplémentaire en fin d'après-midi les mercredis, vendredis et dimanches, de novembre à mars.",pts:[[13.3539,103.8390,"Chapiteau Phare"]],src:["https://pharecircus.org/"]}
];

/* ---- calculs (dates en "AAAA-MM-JJ", heure du Cambodge UTC+7) ---- */
const evtPad=n=>String(n).padStart(2,"0");
const evtIso=d=>d.getUTCFullYear()+"-"+evtPad(d.getUTCMonth()+1)+"-"+evtPad(d.getUTCDate());
const evtDay=s=>new Date(s+"T00:00:00Z");
const evtAdd=(s,n)=>{const d=evtDay(s);d.setUTCDate(d.getUTCDate()+n);return evtIso(d)};
const evtToday=()=>evtIso(new Date(Date.now()+7*36e5));
const evtMonday=(s,offset)=>{const d=evtDay(s);const w=(d.getUTCDay()+6)%7;return evtAdd(s,-w+7*(offset||0))};

/* Toutes les occurrences entre start et end inclus, triées par date. */
function evtBetween(start,end){const out=[];
 const y0=+start.slice(0,4),y1=+end.slice(0,4);
 for(let y=y0;y<=y1;y++)EVT_FIXED.forEach(e=>{const s=y+"-"+e.md;if(s>=start&&s<=end)out.push(Object.assign({date:s},e))});
 EVT_DATED.forEach(e=>{const f=e.fin||e.date;if(e.date<=end&&f>=start)out.push(e)});
 return out.sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:0)}

/* Ce qui a lieu un jour donné : événements datés + rendez-vous réguliers. */
function evtOn(day){const wd=evtDay(day).getUTCDay();
 const dated=evtBetween(day,day);
 const weekly=EVT_WEEKLY.filter(e=>e.days.includes(wd)&&(!e.from||day>=e.from)&&(!e.to||day<=e.to)).map(e=>Object.assign({date:day,recurring:true},e));
 return dated.concat(weekly)}

/* L'année est-elle couverte par les dates officielles des fêtes lunaires ? */
const evtYearOk=y=>EVT_YEARS_OK.includes(+y);
