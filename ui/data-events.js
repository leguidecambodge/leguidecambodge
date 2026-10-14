/* ===== Agenda des événements (page #events + ancienne page evenements/) =====
   Tout est calculé à l'affichage : la semaine montrée change seule chaque lundi (heure du Cambodge).
   - EVT_FIXED  : jours fériés à date fixe, répétés automatiquement chaque année.
   - EVT_DATED  : fêtes lunaires (dates officielles différentes chaque année) et événements ponctuels.
                  Le gouvernement publie les jours fériés de l'année suivante vers mi-septembre :
                  ajouter alors les fêtes lunaires de la nouvelle année ici (EVT_YEARS_OK aussi).
   - EVT_WEEKLY : rendez-vous réguliers (days : 0 = dimanche … 6 = samedi), from/to optionnels.
   Règle : n'ajouter que des informations vérifiées, avec leur source (src). */
const EVT_SRC_FERIES_2026="https://emerhub.com/cambodia/public-holidays-in-cambodia/";
const EVT_SRC_FERIES_2027="https://cambodianess.com/article/cambodia-has-22-public-holidays-in-2027";
const EVT_YEARS_OK=[2026,2027];
const EVT_CATS={national:["Fête nationale","🇰🇭"],religion:["Fête religieuse","🙏"],festival:["Festival","🎉"],sport:["Sport","🏃"],culture:["Culture & sorties","🎭"]};

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
].map(e=>Object.assign({ville:"all",src:[EVT_SRC_FERIES_2026,EVT_SRC_FERIES_2027]},e));

const NY={titre:"Nouvel An khmer (Chaul Chnam Thmey)",ville:"all",cat:"religion",emoji:"🎉",desc:"La plus grande fête de l'année : 3 jours fériés. Beaucoup de Cambodgiens rentrent dans leur village, les pagodes sont très fréquentées et on s'asperge d'eau dans les rues. Commerces souvent fermés, transports pris d'assaut."};
const VISAK={titre:"Visak Bochea",ville:"all",cat:"religion",emoji:"☸️",desc:"Jour férié bouddhiste (naissance, éveil et mort du Bouddha). Offrandes et processions aux chandelles dans les pagodes."};
const PLOUGH={titre:"Cérémonie royale du labour (Preah Reach Pithi Chrat Preah Neangkol)",ville:"all",cat:"religion",emoji:"🐂",desc:"Jour férié qui ouvre la saison des pluies et des rizières : selon ce que mangent les bœufs royaux, on prédit la récolte de l'année. Le lieu de la cérémonie est annoncé chaque année."};
const PCHUM={titre:"Pchum Ben, fête des ancêtres",ville:"all",cat:"religion",emoji:"🙏",desc:"Les 3 jours fériés qui terminent 15 jours d'offrandes aux ancêtres. Les familles vont à la pagode avant l'aube, beaucoup rentrent dans leur province : grosse affluence sur les routes et dans les bus."};
const WATER={titre:"Fête des eaux (Bon Om Touk)",ville:"all",cat:"festival",emoji:"🚣",desc:"3 jours fériés. À Phnom Penh, courses de pirogues sur le Tonlé Sap devant le Palais royal, bateaux illuminés le soir. Énorme foule sur les quais : réserver son hébergement tôt."};
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
 {date:"2026-12-06",titre:"Semi-marathon international d'Angkor Wat",ville:"siem-reap",cat:"sport",emoji:"🏅",heure:"5h – 10h30",lieu:"Départ devant Angkor Wat",desc:"31e édition. Distances : 21 km, 10 km, 5 km et 3 km. Inscription obligatoire à l'avance ; routes du parc d'Angkor perturbées le matin.",src:["https://angkorhospital.org/angkor-wat-international-half-marathon-2026/"]}
];

const EVT_WEEKLY=[
 {days:[6,0],titre:"Walk Street : quais piétons de Phnom Penh",ville:"phnom-penh",cat:"culture",emoji:"🚶",heure:"18h – 23h",lieu:"Quai Sisowath, de la Poste au Palais royal",desc:"Chaque week-end, les quais sont fermés aux voitures : stands de street food, spectacles et promenade au bord du fleuve. Entrée libre.",src:["https://cambodianess.com/article/walking-street-to-open-for-public-leisure"]},
 {days:[0,1,2,3,4,5,6],titre:"Phare, le cirque cambodgien",ville:"siem-reap",cat:"culture",emoji:"🎪",heure:"20h (accueil dès 17h30)",lieu:"Chapiteau Phare, Siem Reap",desc:"Spectacle de cirque et de théâtre par de jeunes artistes cambodgiens, environ 1 h. Payant, réservation conseillée.",src:["https://pharecircus.org/"]},
 {days:[3,5,0],from:"2026-11-01",to:"2027-03-31",titre:"Phare, le cirque cambodgien : séance de 17h",ville:"siem-reap",cat:"culture",emoji:"🎪",heure:"17h",lieu:"Chapiteau Phare, Siem Reap",desc:"Séance supplémentaire en fin d'après-midi les mercredis, vendredis et dimanches, de novembre à mars.",src:["https://pharecircus.org/"]}
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
