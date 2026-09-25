/* ===== Le Guide Cambodge — application (design Kampuchea) ===== */
"use strict";
const $=s=>document.querySelector(s), byId=id=>DEST.find(d=>d.id===id);
const norm=s=>String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const shortName=n=>n.split(" &")[0];
const bestShort=d=>d.best.split(".")[0].split(":")[0].split(" (")[0].trim();
const MONTHS=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const SITE_TITLE=document.title;
const PLACES_COUNT=DEST.reduce((n,d)=>n+d.places.length,0);
let LANG="fr", FAV=new Set();
try{FAV=new Set(JSON.parse(localStorage.getItem("gc-fav")||"[]").filter(id=>byId(id)))}catch(e){}

/* ===== scènes illustrées (utilisées tant qu'une province n'a pas de photo) ===== */
const PAL={temple:["#3b2a1f","#a8683a","#e0b06a"],city:["#1d2733","#4f6b7c","#e8b070"],river:["#123a44","#2f7a86","#e8c98a"],sea:["#0b3b55","#1f8aa8","#d9e9e2"],jungle:["#0f2e22","#2d6b44","#a9c96b"],hills:["#2d3a2a","#6f8f4e","#e6d29a"],lake:["#27324a","#5b7fa3","#f0c98c"],paddy:["#334d2a","#8fb14f","#f4de9c"]};
function scene(type,seed=1){const p=PAL[type]||PAL.paddy;const id="g"+type+seed;
 const hills=(y,amp,col,op)=>{let d=`M0 ${y}`;for(let x=0;x<=1000;x+=50){d+=` Q${x+25} ${y-amp*Math.sin((x+seed*40)/90)} ${x+50} ${y}`}return `<path d="${d} L1000 600 L0 600Z" fill="${col}" opacity="${op}"/>`};
 let body="";
 if(type==="sea"||type==="lake"||type==="river"){body=`<ellipse cx="${300+seed*60}" cy="150" rx="70" ry="70" fill="${p[2]}" opacity=".9"/>${hills(330,18,p[1],.9)}${hills(420,10,p[0],.8)}${hills(500,6,p[1],.5)}`}
 else if(type==="temple"){body=`<circle cx="${700-seed*40}" cy="170" r="90" fill="${p[2]}" opacity=".8"/><rect x="420" y="300" width="160" height="300" fill="${p[0]}"/><path d="M420 300 L500 120 L580 300Z" fill="${p[0]}"/><rect x="330" y="380" width="80" height="220" fill="${p[0]}"/><path d="M330 380 L370 260 L410 380Z" fill="${p[0]}"/><rect x="590" y="380" width="80" height="220" fill="${p[0]}"/><path d="M590 380 L630 260 L670 380Z" fill="${p[0]}"/>${hills(520,8,p[0],1)}`}
 else if(type==="city"){body=`<circle cx="${250+seed*50}" cy="180" r="80" fill="${p[2]}" opacity=".85"/>`+[0,1,2,3,4,5,6,7,8].map(i=>`<rect x="${i*115+20}" y="${300+((i*seed*37)%160)}" width="70" height="400" fill="${p[0]}" opacity="${.7+(i%3)*.1}"/>`).join("")+`<path d="M470 330 L510 230 L550 330Z" fill="${p[0]}"/>`}
 else if(type==="jungle"){body=`${hills(260,40,p[1],.7)}${hills(360,50,p[0],.9)}`+[0,1,2,3,4].map(i=>`<ellipse cx="${i*240+seed*30}" cy="${470+i*10}" rx="130" ry="90" fill="${p[0]}"/>`).join("")}
 else if(type==="hills"){body=`<circle cx="${800-seed*60}" cy="160" r="85" fill="${p[2]}" opacity=".9"/>${hills(330,60,p[1],.85)}${hills(420,45,p[0],.9)}${hills(520,25,p[0],1)}`}
 else {body=`<circle cx="${750-seed*50}" cy="170" r="80" fill="${p[2]}" opacity=".9"/>${hills(380,14,p[1],.9)}`+[0,1,2,3,4,5,6].map(i=>`<path d="M0 ${430+i*24} L1000 ${445+i*24}" stroke="${p[0]}" stroke-width="3" opacity=".5"/>`).join("")}
 return `<div class="scene"><svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p[2]}" stop-opacity=".55"/><stop offset=".55" stop-color="${p[1]}"/><stop offset="1" stop-color="${p[0]}"/></linearGradient></defs><rect width="1000" height="600" fill="url(#${id})"/>${body}</svg></div>`}

/* ===== photos réelles ===== */
function ph(o,mode){const u=`url('${o.src}')`;
 if(o.fit) return (mode==="card"||mode==="panel")
  ? `<div class="scene ph fit" style="background-image:${u}" role="img" aria-label="Photo"></div>`
  : `<div class="scene ph hy"><b style="background-image:${u}"></b><i style="background-image:${u}"></i></div>`;
 const cr=o.credit&&mode==="hero"?`<span class="credit">Photo : ${o.credit}</span>`:"";
 return `<div class="scene ph" style="background-image:${u};--pos:${o.pos||"center"}">${cr}</div>`}
function vis(d,mode,seed){const p=PH[d.id];let o=null;
 if(p){if(mode==="gal0")o=p.gal&&p.gal[0];else if(mode==="gal1")o=p.gal&&p.gal[1];else if(mode==="hero")o=p.hero||p.card;else o=p.card}
 return o?ph(o,mode.startsWith("gal")?"gal":mode):scene(d.scene,seed)}
function pickVis(ids,mode,seed){for(const id of ids){const p=PH[id],o=p&&(mode==="hero"?(p.hero||p.card):p.card);if(o&&!o.fit)return ph(o,mode)}return scene(byId(ids[0]).scene,seed)}

/* ===== textes de navigation ===== */
const T={fr:{home:"Accueil",explore:"Explorer le Cambodge",exp:"Expériences",trips:"Itinéraires",info:"Infos pratiques",map:"Carte interactive",fav:"Favoris",search:"Rechercher"},
 kh:{home:"ទំព័រដើម",explore:"ស្វែងយល់កម្ពុជា",exp:"បទពិសោធន៍",trips:"ផែនការដំណើរ",info:"ព័ត៌មានធ្វើដំណើរ",map:"ផែនទី",fav:"បានរក្សាទុក",search:"ស្វែងរក"}};
const t=k=>T[LANG][k]||k;
const favBtn=id=>`<button class="fav ${FAV.has(id)?"on":""}" data-fav="${id}" title="Ajouter aux favoris" aria-label="Ajouter aux favoris">♥</button>`;
const dcard=(d,cls="",i=0)=>`<a class="card ${cls}" href="#dest/${d.id}">${vis(d,"card",i+1)}<span class="tag">${REGIONS[d.region]}</span>${favBtn(d.id)}<div class="in"><h3>${d.name} <span class="kh" style="font-size:15px;opacity:.8">${d.kh}</span></h3><small>${d.tag}</small></div></a>`;

/* ===== carte ===== */
const PX=(lon,lat)=>[((lon-102.2)*160).toFixed(1),((14.85-lat)*165).toFixed(1)];
const OUTLINE=[[102.35,13.55],[102.55,13.65],[102.6,14.0],[103.2,14.35],[104.0,14.4],[104.6,14.4],[105.2,14.35],[105.5,14.1],[105.95,14.05],[106.0,14.45],[106.5,14.45],[107.05,14.4],[107.55,14.5],[107.5,13.5],[107.6,12.5],[107.5,12.2],[106.4,11.7],[106.2,11.45],[106.4,11.05],[106.15,10.85],[105.8,10.95],[105.4,10.9],[105.1,10.9],[104.9,10.55],[104.5,10.4],[104.3,10.45],[104.15,10.55],[103.9,10.75],[103.55,10.55],[103.4,10.6],[103.2,10.95],[103.05,11.1],[103.1,11.5],[102.9,11.75],[102.6,12.1],[102.35,12.55],[102.4,13.1]];
const MEK=[[105.95,14.6],[105.97,13.53],[106.05,12.9],[106.02,12.48],[105.65,12.25],[105.46,12.0],[105.2,11.75],[104.92,11.56],[105.28,11.26],[105.5,10.95]];
const TSR=[[104.92,11.56],[104.8,11.9],[104.67,12.25],[104.4,12.5]];
function mapSVG(small){const path=a=>a.map((p,i)=>(i?"L":"M")+PX(...p).join(" ")).join(" ");
 const [lx,ly]=PX(104.0,12.85);
 const provs=small?"":DEST.map(d=>{const [x,y]=PX(d.lon,d.lat);const left=d.lon>106.3||["kep","kandal"].includes(d.id);return `<g class="prov" data-id="${d.id}" transform="translate(${x},${y})" tabindex="0" role="link" aria-label="${d.name}"><circle r="7"/><text x="${left?-12:12}" y="4" text-anchor="${left?"end":"start"}">${d.name.replace(" & îles","")}</text></g>`}).join("");
 return `<svg viewBox="0 0 880 760" role="img" aria-label="Carte du Cambodge et de ses 25 provinces"><defs><filter id="sh"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".18"/></filter></defs>
 <path d="${path(OUTLINE)} Z" fill="#F7F1E3" stroke="#B9AD95" stroke-width="1.5" filter="url(#sh)"/>
 <path d="${path(OUTLINE)} Z" fill="none" stroke="#fff" stroke-width="6" opacity=".5"/>
 <path d="${path(MEK)}" fill="none" stroke="#7FA7C2" stroke-width="5" stroke-linecap="round" opacity=".9"/>
 <path d="${path(TSR)}" fill="none" stroke="#7FA7C2" stroke-width="4" stroke-linecap="round" opacity=".9"/>
 <ellipse cx="${lx}" cy="${ly}" rx="120" ry="42" transform="rotate(-32 ${lx} ${ly})" fill="#9FC1D6" opacity=".9"/>
 <text x="${lx-60}" y="${+ly+6}" font-size="11" fill="#2F5D7C" font-style="italic" transform="rotate(-32 ${lx} ${ly})">Tonlé Sap</text>
 <path d="M ${PX(102.6,12.1).join(" ")} Q ${PX(103.3,11.9).join(" ")} ${PX(104.3,11.3).join(" ")}" fill="none" stroke="#B7C9A0" stroke-width="26" stroke-linecap="round" opacity=".55"/>
 <text x="${PX(102.95,12.35)[0]}" y="${PX(102.95,12.35)[1]}" font-size="11" fill="#1E4D3B" font-style="italic">Monts Cardamomes</text>
 <text x="${PX(106.6,13.1)[0]}" y="${PX(106.6,13.1)[1]}" font-size="11" fill="#7B7F79" font-style="italic">Mékong</text>
 <text x="${PX(103.9,14.65)[0]}" y="${PX(103.9,14.65)[1]}" font-size="12" fill="#999">THAÏLANDE</text><text x="${PX(106.2,14.75)[0]}" y="${PX(106.2,14.75)[1]}" font-size="12" fill="#999">LAOS</text><text x="${PX(106.9,11.4)[0]}" y="${PX(106.9,11.4)[1]}" font-size="12" fill="#999">VIETNAM</text><text x="${PX(103.3,10.4)[0]}" y="${PX(103.3,10.4)[1]}" font-size="12" fill="#999">GOLFE DE THAÏLANDE</text>
 ${provs}</svg>`}
function miniMap(d){const [x,y]=PX(d.lon,d.lat);return `<svg viewBox="0 0 880 760" style="width:100%" aria-hidden="true">${mapSVG(true).replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}<circle cx="${x}" cy="${y}" r="26" fill="#B8452B" opacity=".25"/><circle cx="${x}" cy="${y}" r="9" fill="#B8452B" stroke="#fff" stroke-width="3"/></svg>`}

/* ===== vraie carte interactive (MapLibre GL + tuiles vectorielles OpenFreeMap — gratuit, sans clé, toujours nette)
   Rendu vectoriel (comme Google/Apple Maps) : contrairement à des tuiles-images, il reste net à tout zoom et sur tout écran (Retina inclus). ===== */
let MAPLIBRE_READY=null;
function loadMapLibre(){if(MAPLIBRE_READY)return MAPLIBRE_READY;
 MAPLIBRE_READY=new Promise((resolve,reject)=>{
  const l=document.createElement("link");l.rel="stylesheet";l.href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css";document.head.appendChild(l);
  const s=document.createElement("script");s.src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js";
  s.onload=()=>resolve(window.maplibregl);s.onerror=reject;document.head.appendChild(s)});
 return MAPLIBRE_READY}
const CAMBODIA_BOUNDS=[[102.1,10.15],[107.75,14.85]]; // [ouest,sud],[est,nord] — ordre lon,lat attendu par MapLibre
const padBounds=([[w,s],[e,n]],p)=>{const dw=(e-w)*p,dn=(n-s)*p;return [[w-dw,s-dn],[e+dw,n+dn]]};
const GESTURE_FR={"CooperativeGesturesHandler.WindowsHelpText":"Utilisez Ctrl + molette pour zoomer sur la carte","CooperativeGesturesHandler.MacHelpText":"Utilisez ⌘ + molette pour zoomer sur la carte","CooperativeGesturesHandler.MobileHelpText":"Utilisez deux doigts pour déplacer la carte"};
let CURRENT_MAP=null,CURRENT_MARKERS={},ACTIVE_FILTER="",MAP_GEN=0;
function removeCurrentMap(){if(CURRENT_MAP){try{CURRENT_MAP.remove()}catch(e){}CURRENT_MAP=null;CURRENT_MARKERS={}}}
function applyMapFilter(){const e=EXPERIENCES.find(x=>x.id===ACTIVE_FILTER);Object.entries(CURRENT_MARKERS).forEach(([id,mk])=>{mk.getElement().classList.toggle("dim",!!e&&!e.d.includes(id))})}
function initInteractiveMap(id){const el=document.getElementById(id);if(!el)return;ACTIVE_FILTER="";
 const myGen=++MAP_GEN; // annule les initialisations précédentes encore en attente (navigation rapide entre pages pendant le chargement)
 loadMapLibre().then(ml=>{
  if(myGen!==MAP_GEN||!document.body.contains(el))return;
  removeCurrentMap();
  el.innerHTML="";el.classList.remove("loading");
  const map=new ml.Map({container:el,style:"https://tiles.openfreemap.org/styles/positron",center:[104.9,12.55],zoom:6,cooperativeGestures:true,locale:GESTURE_FR,attributionControl:{compact:true},maplibreLogo:false});
  map.fitBounds(CAMBODIA_BOUNDS,{padding:6,animate:false});
  map.addControl(new ml.NavigationControl({showCompass:false}),"bottom-right");
  map.on("load",()=>{if(myGen!==MAP_GEN)return;map.setMinZoom(map.getZoom());map.setMaxBounds(padBounds(CAMBODIA_BOUNDS,.6))});
  DEST.forEach(d=>{
   const left=d.lon>106.3||["kep","kandal"].includes(d.id);
   const wrap=document.createElement("div");wrap.className="gcpin";wrap.innerHTML=`<span class="pin"></span><b class="lbl${left?" l":""}">${shortName(d.name)}</b>`;
   const popup=new ml.Popup({offset:12,maxWidth:"240px",className:"gcpop"}).setHTML(`<div class="popc"><b>${d.name}</b> <span class="kh">${d.kh}</span><small>${d.tag}</small><a class="btn dark" href="#dest/${d.id}">Découvrir →</a></div>`);
   const mk=new ml.Marker({element:wrap,anchor:"center"}).setLngLat([d.lon,d.lat]).setPopup(popup).addTo(map);
   const activate=()=>{const p=$("#mpanel");if(p)p.innerHTML=panel(d);Object.values(CURRENT_MARKERS).forEach(x=>x.getElement().classList.remove("on"));wrap.classList.add("on")};
   wrap.addEventListener("click",activate);wrap.addEventListener("mouseenter",activate);
   CURRENT_MARKERS[d.id]=mk});
  const dId=el.dataset.default,dMk=dId&&CURRENT_MARKERS[dId];if(dMk)dMk.getElement().classList.add("on");
  applyMapFilter();CURRENT_MAP=map;
  setTimeout(()=>map.resize(),200)
 }).catch(()=>{el.classList.remove("loading");el.innerHTML=`<p style="padding:40px;text-align:center;color:var(--mute)">La carte n'a pas pu se charger. <a href="#explore">Voir la liste des provinces</a>.</p>`})}

/* ===== heure du Cambodge (UTC+7 toute l'année, pas de changement d'heure) ===== */
const khTime=()=>{const k=new Date(Date.now()+7*36e5),p=v=>String(v).padStart(2,"0");return `${p(k.getUTCHours())}:${p(k.getUTCMinutes())}:${p(k.getUTCSeconds())}`};
setInterval(()=>{const el=document.getElementById("khtime");if(el){const h=khTime();if(el.textContent!==h)el.textContent=h}},1000);

/* ===== structure commune ===== */
const FOOT_LINKS=[["Histoire","histoire-cambodge/"],["Hôtels","hotels/"],["Vols","vols/"],["Activités","activites/"],["Visa","visa-cambodge/"],["Budget","budget-voyage-cambodge/"],["Blog","blog/"],["Bons plans","bons-plans/"]];
const SITE_PAGES=[["Histoire","histoire-cambodge/"],["Hôtels","hotels/"],["Vols","vols/"],["Activités","activites/"],["Événements","evenements/"],["Angkor","angkor/"],["Angkor Wat","angkor-wat/"],["Visa","visa-cambodge/"],["Budget","budget-voyage-cambodge/"],["Quand partir","quand-partir/"],["Meilleure période","meilleure-periode-cambodge/"],["Itinéraires","itineraire-cambodge/"],["Transports","transports/"],["Scooters","scooters/"],["Quartiers","quartiers/"],["Cuisine khmère","cuisine-khmere/"],["Lexique khmer","lexique-khmer/"],["Guide pratique","guide-pratique-cambodge/"],["Blog","blog/"],["Bons plans","bons-plans/"],["Photos & vidéos","photos-videos/"],["Carte interactive","carte-interactive/"],["Siem Reap","siem-reap/"],["Phnom Penh","phnom-penh/"],["Kampot","kampot/"],["Kep","kep/"],["Battambang","battambang/"],["Sihanoukville","sihanoukville/"],["Koh Rong","koh-rong/"],["Koh Rong Sanloem","koh-rong-sanloem/"],["Mondulkiri","mondulkiri/"],["Pursat","pursat/"],["Poipet","poipet/"]];
function nav(active){return `<nav class="top" aria-label="Navigation principale"><div class="wrap"><div class="brand"><a class="logo" href="#home" aria-label="Le Guide Cambodge, accueil"><i></i>Le Guide<span style="font-weight:300;color:var(--mute)">&nbsp;Cambodge</span></a><div class="khtime" id="khtime" title="Heure du Cambodge (UTC+7)">${khTime()}</div></div>
 <ul id="menu">${[["home","home"],["explore","explore"],["exp","exp"],["trips","trips"],["info","info"]].map(([k,r])=>`<li><a href="#${r}" class="${active===r?"on":""}">${t(k)}</a></li>`).join("")}</ul>
 <div class="navtools"><button class="pill" id="sbtn" title="${t("search")}" aria-label="${t("search")}">⌕<span class="sl"> ${t("search")}</span></button><a class="pill" href="#fav" aria-label="${t("fav")}">♥ ${FAV.size}</a><button class="pill ${LANG==="kh"?"on":""}" id="lang" aria-label="Changer de langue">${LANG==="fr"?"ខ្មែរ":"FR"}</button><button class="burger pill" id="burger" aria-label="Menu">☰</button></div></div></nav>`}
function footer(){return `<footer><div class="wrap"><div class="cols"><div><div class="logo"><i></i>Le Guide Cambodge</div><p style="margin-top:12px;max-width:34ch">Le guide indépendant des 25 provinces du Cambodge : carte, itinéraires et conseils pratiques pour préparer votre voyage.</p></div>
 <div><h5>Destinations</h5><ul>${DEST.slice(0,8).map(d=>`<li><a href="#dest/${d.id}">${shortName(d.name)}</a></li>`).join("")}<li><a href="#explore">Les 25 provinces →</a></li></ul></div>
 <div><h5>Expériences</h5><ul>${EXPERIENCES.slice(0,8).map(e=>`<li><a href="#exp/${e.id}">${e.name}</a></li>`).join("")}</ul></div>
 <div><h5>Pratique</h5><ul>${INFO.slice(0,8).map(i=>`<li><a href="#info/${i.id}">${i.t}</a></li>`).join("")}</ul></div>
 <div><h5>Le guide</h5><ul>${FOOT_LINKS.map(([n,h])=>`<li><a href="${h}">${n}</a></li>`).join("")}</ul></div></div>
 <div class="legal"><div id="legal">© ${new Date().getFullYear()} Le Guide Cambodge · <a href="mentions-legales/">Mentions légales</a> · <a href="mailto:leguidecambodge@gmail.com">leguidecambodge@gmail.com</a> · <a href="https://www.facebook.com/profile.php?id=61593270170380" target="_blank" rel="noopener noreferrer">Facebook</a></div>
 <div>Transparence : certains liens de ce site (hôtels, vols, activités) sont des liens d'affiliation. Ils ne changent rien à votre prix et nous aident à financer le site.</div>
 <div class="tri">Tout le guide : ${SITE_PAGES.map(([n,h])=>`<a href="${h}">${n}</a>`).join(" · ")}</div></div></div></footer>`}
const REG_ORDER=["north","tonle","central","mekong","plateau","cardamom","coast"];

/* ===== accueil ===== */
function home(){const m=new Date().getMonth();const seasons=["dry","dry","hot","hot","hot","rain","rain","rain","rain","rain","dry","dry"];
 const now=m>=5&&m<=9?{h:"La saison verte est la saison secrète",p:"En ce moment, les rizières sont d'un vert électrique, Bou Sra et Sopheakmit sont à pleine puissance, le Tonlé Sap est assez haut pour naviguer dans les forêts inondées, et Angkor reçoit deux fois moins de visiteurs. Prévoyez un poncho : la pluie dure une heure."}:m>=10||m<=1?{h:"La haute saison, autrement",p:"Matins frais et ciel bleu partout. Filez vers le Ratanakiri et le Mondulkiri tant que les routes sont sèches, ou allez voir arriver les grues antigones à Ang Trapeang Thmor."}:{h:"La saison chaude est celle des îles",p:"À l'intérieur des terres, le thermomètre monte à 38 °C. La côte et les îles sont à leur plus limpide, la récolte du poivre de Kampot bat son plein et le Nouvel An khmer, en avril, transforme chaque ville en bataille d'eau."};
 return nav("home")+`<header class="hero" id="top">${ph(PH.home,"hero")}<div class="wrap"><span class="eyebrow" style="color:var(--sand)">Royaume du Cambodge · 25 provinces</span>
 <h1>Le Cambodge, <em style="white-space:nowrap">au-delà</em> des temples que vous connaissez.</h1><p>Des îles sans routes, un fleuve à dauphins, des forêts qui cachent des éléphants et des cités préangkoriennes, et un marché aux crabes qui changera votre regard sur le poivre. Explorez tout le pays, province par province.</p>
 <div class="search" id="hsearch"><span style="color:var(--mute)">⌕</span><input placeholder="Essayez « cascades », « Kratie », « 7 jours », « dauphins »…" aria-label="Rechercher"><button class="btn dark">Rechercher</button></div>
 <div class="cta"><a class="btn pri" href="#map">Ouvrir la carte</a><a class="btn ghost" href="#trips">Planifier un voyage</a></div>
 <div class="stats"><div><b>${DEST.length}</b>provinces</div><div><b>${EXPERIENCES.length}</b>expériences</div><div><b>${TRIPS.length}</b>itinéraires</div><div><b>${PLACES_COUNT}</b>lieux à voir</div></div></div></header>
 <section class="s" id="map"><div class="wrap"><div class="shead"><div><span class="eyebrow">${t("map")}</span><h2>Touchez une province. Chacune a son histoire.</h2></div><p>Filtrez selon vos envies, puis ouvrez la fiche d'une province : lieux, cuisine, trésors cachés et itinéraires.</p></div>
 <div class="mapfilters chips"><button class="chip on" data-f="">Tout</button>${EXPERIENCES.slice(0,9).map(e=>`<button class="chip" data-f="${e.id}">${e.name}</button>`).join("")}</div>
 <div class="mapwrap"><div class="mapbox"><div id="leafmap-home" class="leafmap loading" data-default="kampot" role="application" aria-label="Carte interactive du Cambodge"></div></div><div class="mappanel" id="mpanel">${panel(byId("kampot"))}</div></div></div></section>
 <section class="s" id="featured" style="padding-top:0"><div class="wrap"><div class="shead"><div><span class="eyebrow">À la une ce mois-ci</span><h2>Sept provinces, sept Cambodges très différents</h2></div><a class="link" href="#explore">Les 25 provinces</a></div>
 <div class="grid g3">${["siem-reap","kampot","mondulkiri","kratie","sihanoukville","battambang","koh-kong"].map((id,i)=>dcard(byId(id),i===0?"tall wide":i===3?"tall":"",i)).join("")}</div></div></section>
 <section class="s dark"><div class="wrap"><div class="shead"><div><span class="eyebrow" style="color:var(--gold)">Explorer par expérience</span><h2>Quel Cambodge voulez-vous ressentir ?</h2></div><a class="link" style="border-color:var(--cream)" href="#exp">Les ${EXPERIENCES.length} expériences</a></div>
 <div class="chips" style="gap:10px">${EXPERIENCES.map(e=>`<a class="chip" style="font-size:15px;padding:14px 20px;border-color:#3a4441" href="#exp/${e.id}">${e.name} <span style="opacity:.5;font-size:12px">${e.d.length}</span></a>`).join("")}</div></div></section>
 <section class="s"><div class="wrap"><div class="shead"><div><span class="eyebrow">Idées de voyage</span><h2>Quel voyage au Cambodge voulez-vous faire ?</h2></div><a class="link" href="#trips">Tous les itinéraires</a></div>
 <div class="dur" id="dur">${[3,5,7,10,14,21].map(n=>`<button data-d="${n}" class="${n===10?"on":""}">${n}<small>jours</small></button>`).join("")}</div>
 <div class="grid g3" id="tripgrid">${tripCards(10)}</div></div></section>
 <section class="s dark" style="background:#0F1716"><div class="wrap"><div class="shead"><div><span class="eyebrow" style="color:var(--gold)">Cambodge caché</span><h2>Des lieux dont vous n'aviez jamais entendu parler</h2></div><p>Chacun est réel, accessible, et presque sans visiteurs.</p></div>
 <div class="gems">${HIDDEN.map(g=>`<a class="gem" href="#dest/${g.p}"><small>${shortName(byId(g.p).name)}</small><b>${g.t}</b><p>${g.s}</p></a>`).join("")}</div></div></section>
 <section class="s"><div class="wrap"><div class="now"><div>${ph({src:P("siem reap 8"),pos:"50% 50%"},"card")}</div><div><span class="eyebrow">En ce moment au Cambodge · ${MONTHS[m]}</span><h2 style="font-size:40px;margin:10px 0 14px">${now.h}</h2><p class="lead">${now.p}</p>
 <div class="monthbar">${seasons.map((s,i)=>`<span class="${s} ${i===m?"on":""}" title="${MONTHS[i]}"></span>`).join("")}</div><p style="font-size:13px;color:var(--mute)"><span style="color:var(--gold)">■</span> Sec & frais &nbsp; <span style="color:var(--lacq)">■</span> Chaud &nbsp; <span style="color:var(--mek)">■</span> Saison verte</p><a class="btn dark" style="margin-top:20px" href="#info/weather">Quand partir</a></div></div></div></section>
 <section class="s" style="padding-top:0"><div class="wrap"><div class="shead"><div><span class="eyebrow">Culture, cuisine, événements</span><h2>Le Cambodge vivant</h2></div></div>
 <div class="grid g3"><a class="card" href="#exp/food">${scene("city",7)}<div class="in"><h3>La cuisine khmère, région par région</h3><small>Du prahok au crabe au poivre : où bien manger</small></div></a><a class="card" href="#info/events">${scene("river",8)}<div class="in"><h3>Fêtes & événements</h3><small>Fête de l'eau, Nouvel An khmer, Pchum Ben, marathon d'Angkor</small></div></a><a class="card" href="#exp/markets">${scene("paddy",9)}<div class="in"><h3>Artisanat & patrimoine vivant</h3><small>Soie, argile, riz, marchés et ateliers</small></div></a></div></div></section>
 <section class="s" id="practical" style="padding-top:0"><div class="wrap"><div class="shead"><div><span class="eyebrow">Pratique</span><h2>Tout ce qu'il faut savoir avant d'atterrir</h2></div><a class="link" href="#info">Toutes les infos pratiques</a></div><div class="grid g4">${INFO.slice(0,8).map(i=>`<a class="box" href="#info/${i.id}" style="min-height:120px"><h4>${i.t}</h4><p class="kh" style="color:var(--mute)">${i.kh}</p></a>`).join("")}</div></div></section>
 <section class="s" id="contact" style="padding-top:0"><div class="wrap"><div class="shead"><div><span class="eyebrow">Rester en contact</span><h2>Une question ? Une envie de recevoir nos bons plans ?</h2></div></div>
 <div class="forms">
 <div class="formbox"><h3>Restez informé, gratuitement</h3><p class="sub">Bons plans, guides exclusifs et nouveautés sur le Cambodge, directement dans votre boîte mail.</p>
 <form id="nl-form" novalidate aria-label="Inscription à la newsletter"><div class="row2"><div><label for="nl-prenom">Prénom</label><input id="nl-prenom" placeholder="Marie" autocomplete="given-name" maxlength="50" required></div><div><label for="nl-nom">Nom</label><input id="nl-nom" placeholder="Dupont" autocomplete="family-name" maxlength="50" required></div></div>
 <label for="nl-email">E-mail</label><input id="nl-email" type="email" placeholder="marie@exemple.com" autocomplete="email" maxlength="100" required>
 <input class="hp" id="nl-honey" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
 <label class="chk" for="nl-rgpd"><input type="checkbox" id="nl-rgpd"><span>J'accepte de recevoir la newsletter et les offres de Le Guide Cambodge. Je peux me désinscrire à tout moment. <a href="mentions-legales/">Politique de confidentialité</a></span></label>
 <button class="btn dark" type="submit">Je m'inscris</button><div class="msg ok" id="nl-success" role="status">✓ Merci ! Votre inscription est bien prise en compte.</div><div class="msg ko" id="nl-error" role="alert"></div></form></div>
 <div class="formbox"><h3>Écrivez-nous</h3><p class="sub">Besoin d'un conseil personnalisé pour votre voyage au Cambodge ? Nous répondons dans les 24 h.</p>
 <form id="contact-form" novalidate aria-label="Formulaire de contact"><div class="row2"><div><label for="contact-name">Votre prénom</label><input id="contact-name" placeholder="Marie" autocomplete="given-name" maxlength="50" required></div><div><label for="contact-email">Votre e-mail</label><input id="contact-email" type="email" placeholder="marie@exemple.com" autocomplete="email" maxlength="100" required></div></div>
 <label for="contact-sujet">Sujet</label><select id="contact-sujet" required><option value="">Choisir un sujet…</option><option>Question sur une ville</option><option>Conseil itinéraire</option><option>Restaurant ou hôtel</option><option>Visa & formalités</option><option>Autre question</option></select>
 <label for="contact-message">Votre message</label><textarea id="contact-message" placeholder="Décrivez votre demande…" maxlength="1000" required></textarea>
 <input class="hp" id="contact-honey" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
 <button class="btn lacq" type="submit">Envoyer le message</button><div class="msg ok" id="form-success" role="status">✓ Message envoyé ! Nous vous répondrons dans les 24 h.</div><div class="msg ko" id="form-error" role="alert"></div></form>
 <div class="contactline"><a href="mailto:leguidecambodge@gmail.com">leguidecambodge@gmail.com</a><a href="https://www.facebook.com/profile.php?id=61593270170380" target="_blank" rel="noopener noreferrer">Facebook</a></div></div>
 </div></div></section>`+footer()}
function panel(d){return `${vis(d,"panel",2)}<span class="eyebrow">${REGIONS[d.region]}</span><h3>${d.name} <span class="kh" style="font-size:16px;color:var(--mute)">${d.kh}</span></h3><p style="color:var(--ink2);font-size:15px">${d.intro.split(". ")[0]}.</p><ul>${d.places.slice(0,4).map(p=>`<li>${p}</li>`).join("")}</ul><div style="display:flex;gap:10px;margin-top:auto;padding-top:10px;flex-wrap:wrap"><a class="btn dark" href="#dest/${d.id}">Découvrir ${shortName(d.name)}</a><span style="font-size:13px;color:var(--mute);align-self:center">${d.duration} · ${bestShort(d)}</span></div>`}
function tripCards(days,list){list=list||TRIPS.filter(tr=>tr.days===days||Math.abs(tr.days-days)<=2).slice(0,6);if(!list.length)list=TRIPS.slice(0,6);
 return list.map(tr=>`<a class="trip" href="#trip/${tr.id}"><div class="days">${tr.days}<span style="font-size:14px;color:var(--mute)"> jours</span></div><h3>${tr.name}</h3><p style="font-size:14px;color:var(--ink2)">${tr.pitch}</p><div class="route">${tr.route.map(r=>`<span>${shortName(byId(r).name)}</span>`).join("")}</div></a>`).join("")}

/* ===== explorer ===== */
function explore(){return nav("explore")+`<section class="exphero"><div class="wrap"><span class="eyebrow">${t("explore")}</span><h1>Les 25 provinces</h1><p class="lead">On réduit souvent le Cambodge à deux villes. Voici tout le pays, région par région, avec la carte qui va avec.</p></div></section>
 <section class="s" style="padding-top:20px"><div class="wrap"><div class="mapfilters chips"><button class="chip on" data-f="">Tout</button>${EXPERIENCES.map(e=>`<button class="chip" data-f="${e.id}">${e.name}</button>`).join("")}</div><div class="mapwrap"><div class="mapbox"><div id="leafmap-explore" class="leafmap loading" data-default="ratanakiri" role="application" aria-label="Carte interactive du Cambodge"></div></div><div class="mappanel" id="mpanel">${panel(byId("ratanakiri"))}</div></div></div></section>
 ${REG_ORDER.map(r=>`<section class="s" style="padding-top:0"><div class="wrap"><div class="shead"><h2 style="font-size:34px">${REGIONS[r]}</h2></div><div class="grid g4">${DEST.filter(d=>d.region===r).map((d,i)=>dcard(d,"",i)).join("")}</div></div></section>`).join("")}`+footer()}

/* ===== galerie photos & vidéos (fichiers du dossier photos/) ===== */
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const mediaUrl=f=>"photos/"+f.split("/").map(encodeURIComponent).join("/");
const mediaThumb=m=>mediaUrl(m.t==="v"?m.poster:m.f);
const plural=(n,w)=>n+" "+w+(n>1?"s":"");
function gallery(d){const m=MEDIA[d.id];if(!m||m.length<2)return "";const LIM=12,nP=m.filter(x=>x.t==="p").length,nV=m.length-nP;
 const tile=(x,i)=>`<button class="mt${x.t==="v"?" v":""}" data-i="${i}"${i>=LIM?" hidden":""} aria-label="${x.t==="v"?"Vidéo : ":""}${esc(x.n)}"><img loading="lazy" decoding="async" src="${mediaThumb(x)}" width="${x.w}" height="${x.h}" alt="${esc(x.c)}">${x.t==="v"?'<span class="mv"><i></i>Vidéo</span>':""}<span class="mc">${x.n}</span></button>`;
 return `<h2 id="gallery">Galerie</h2><p class="gnote">Photos et vidéos personnelles. Touchez une image pour l'agrandir.</p><div class="mgrid" data-p="${d.id}">${m.map(tile).join("")}</div>${m.length>LIM?`<button class="btn dark gmore" data-more>Voir les ${plural(nP,"photo")}${nV?" et "+plural(nV,"vidéo"):""}</button>`:""}`}
function placeBtn(d,i){const m=(MEDIA[d.id]||[]).filter(x=>x.at&&x.at.includes(i));if(!m.length)return "";const nP=m.filter(x=>x.t==="p").length,nV=m.length-nP;
 return `<button class="mbtn" data-pl="${d.id}:${i}">Voir ${[nP&&plural(nP,"photo"),nV&&plural(nV,"vidéo")].filter(Boolean).join(" et ")}</button>`}
let LB={list:[],i:0};
function lbShow(){const x=LB.list[LB.i],b=$("#lbx");
 b.querySelector(".lbx-media").innerHTML=x.t==="v"?`<video controls playsinline autoplay preload="auto" poster="${mediaUrl(x.poster)}" src="${mediaUrl(x.f)}"></video>`:`<img src="${mediaUrl(x.f)}" alt="${esc(x.c)}">`;
 b.querySelector(".lbx-t").textContent=x.n;b.querySelector(".lbx-c").textContent=x.c;b.querySelector(".lbx-k").textContent=(LB.i+1)+" / "+LB.list.length+(x.t==="v"?" · vidéo":"");
 b.querySelector(".lbx-p").hidden=b.querySelector(".lbx-n").hidden=LB.list.length<2}
function lbOpen(list,i){if(!list||!list.length)return;LB={list,i};const b=$("#lbx");b.hidden=false;document.body.style.overflow="hidden";lbShow();b.querySelector(".lbx-x").focus()}
function lbClose(){const b=$("#lbx");if(!b||b.hidden)return;b.querySelector(".lbx-media").innerHTML="";b.hidden=true;document.body.style.overflow=""}
function lbStep(n){LB.i=(LB.i+n+LB.list.length)%LB.list.length;lbShow()}

/* ===== fiche province ===== */
function dest(id){const d=byId(id);if(!d)return home();const trips=TRIPS.filter(tr=>tr.route.includes(d.id));const exps=EXPERIENCES.filter(e=>e.d.includes(d.id));const guides=GUIDES[d.id]||[];const half=Math.ceil(d.todo.length/2);const gal=gallery(d);
 const sub=s=>`<h4 style="font-family:var(--sans);font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);margin-bottom:10px">${s}</h4>`;
 return nav("explore")+`<header class="dhero">${vis(d,"hero",4)}<div class="wrap"><div class="crumbs"><a href="#home">Accueil</a> / <a href="#explore">Explorer</a> / ${REGIONS[d.region]}</div><h1>${d.name}</h1><div class="khname">${d.kh}</div><p style="font-size:20px;max-width:50ch;margin-top:14px;opacity:.9">${d.tag}</p></div></header>
 <div class="wrap"><div class="facts"><div><small>Durée conseillée</small><b>${d.duration}</b></div><div><small>Meilleure période</small><b>${bestShort(d)}</b></div><div><small>Région</small><b>${REGIONS[d.region]}</b></div><div><small>Idéal pour</small><b style="font-size:15px">${exps.slice(0,3).map(e=>e.name).join(" · ")}</b></div></div></div>
 <div class="wrap"><div class="ttoc">${[["intro","Introduction"],["places","Lieux incontournables"],["todo","À faire"],...(gal?[["gallery","Galerie"]]:[]),["food","Cuisine"],["hidden","Trésors cachés"],["stay","Où dormir"],["getthere","Y aller"],["trips","Itinéraires"]].map(([k,l])=>`<a href="#dest/${d.id}" data-go="${k}">${l}</a>`).join("")}</div>
 <div class="dbody"><div>
 <h2 id="intro">Pourquoi aller à ${shortName(d.name)}</h2><p class="lead">${d.intro}</p>
 <h2 id="places">Lieux incontournables</h2><ol class="plist">${d.places.map((p,i)=>`<li><span>${p}</span>${placeBtn(d,i)}</li>`).join("")}</ol>
 <h2 id="todo">À faire</h2><div class="two"><ul>${d.todo.slice(0,half).map(x=>`<li>${x}</li>`).join("")}</ul><ul>${d.todo.slice(half).map(x=>`<li>${x}</li>`).join("")}</ul></div>
 ${gal||`<div class="grid g2 gal" style="margin-top:30px"><div>${vis(d,"gal0",6)}</div><div>${vis(d,"gal1",7)}</div></div>`}
 <h2 id="food">Cuisine & culture</h2><div class="two"><div>${sub("À table")}<ul>${d.food.map(x=>`<li>${x}</li>`).join("")}</ul></div><div>${sub("Expériences ici")}<ul>${exps.map(e=>`<li><a href="#exp/${e.id}" style="border-bottom:1px solid var(--line)">${e.name}</a></li>`).join("")}</ul></div></div>
 <h2 id="hidden">Trésors cachés</h2><div class="gems" style="background:var(--line)">${d.hidden.map(h=>`<div class="gem" style="background:#fff;color:var(--ink)"><b style="font-size:19px">${h}</b></div>`).join("")}</div>
 <h2 id="stay">Où dormir</h2><ul class="plist" style="counter-reset:p">${d.stay.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn dark stay-cta" target="_blank" rel="sponsored noopener noreferrer" href="https://www.booking.com/searchresults.fr.html?ss=${encodeURIComponent(shortName(d.name)+", Cambodge")}">Comparer les hébergements à ${shortName(d.name)}</a><p class="tri">Lien partenaire Booking.com : sans surcoût pour vous.</p>
 <h2 id="getthere">Comment s'y rendre</h2><p class="lead" style="font-size:17px">${d.getThere}</p><h3 style="font-size:22px;margin:26px 0 8px">Meilleure période</h3><p>${d.best}</p>
 <h2 id="trips">Itinéraires passant par ${shortName(d.name)}</h2>${trips.length?`<div class="grid g2">${tripCards(0,trips.slice(0,4))}</div>`:`<p>Cette province se combine facilement avec ses voisines : voir « À proximité ».</p>`}
 </div>
 <aside class="side"><div class="box" style="padding:12px"><div class="minimap">${miniMap(d)}</div><p style="padding:10px 8px 4px;font-size:12px">${d.lat.toFixed(2)}°N ${d.lon.toFixed(2)}°E</p></div>
 <div class="box"><h4>En bref</h4><ul><li><b>Durée</b> ${d.duration}</li><li><b>Meilleure période</b> ${bestShort(d)}</li><li><b>Itinéraires</b> ${trips.length}</li></ul><button class="btn lacq" style="margin-top:14px;width:100%;justify-content:center" data-fav="${d.id}">${FAV.has(d.id)?"♥ Enregistré":"♡ Ajouter à mes favoris"}</button></div>
 ${guides.length?`<div class="box nearby"><h4>Aller plus loin</h4>${guides.map(([n,h])=>`<a href="${h}">${n}</a>`).join("")}</div>`:""}
 <div class="box nearby"><h4>À proximité</h4>${d.nearby.map(n=>byId(n)?`<a href="#dest/${n}">${shortName(byId(n).name)}</a>`:"").join("")}</div></aside></div></div>`+footer()}

/* ===== expériences ===== */
function expList(){return nav("exp")+`<section class="exphero"><div class="wrap"><span class="eyebrow">${t("exp")}</span><h1>Explorer par expérience</h1><p class="lead">Une autre façon d'entrer dans le pays. Choisissez ce que vous voulez ressentir, nous vous montrons où cela se passe au Cambodge.</p></div></section><section class="s" style="padding-top:10px"><div class="wrap"><div class="grid g3">${EXPERIENCES.map((e,i)=>`<a class="card" href="#exp/${e.id}">${pickVis(e.d,"card",i+2)}<div class="in"><h3>${e.name}</h3><small>${e.d.length} provinces · ${e.blurb.slice(0,70)}…</small></div></a>`).join("")}</div></div></section>`+footer()}
function exp(id){const e=EXPERIENCES.find(x=>x.id===id);if(!e)return expList();const trips=TRIPS.filter(tr=>tr.id===e.id||tr.route.some(r=>e.d.includes(r))).slice(0,3);
 return nav("exp")+`<header class="dhero" style="min-height:60vh">${pickVis(e.d,"hero",9)}<div class="wrap"><div class="crumbs"><a href="#exp">Expériences</a></div><h1>${e.name}</h1><div class="khname">${e.kh}</div><p style="font-size:19px;max-width:56ch;margin-top:14px">${e.blurb}</p></div></header>
 <section class="s"><div class="wrap"><div class="shead"><h2>Où le vivre</h2><p>${e.d.length} provinces, classées par ordre de préférence.</p></div><div class="grid g3">${e.d.map((id,i)=>dcard(byId(id),"",i)).join("")}</div></div></section>
 <section class="s" style="padding-top:0"><div class="wrap"><div class="shead"><h2>Itinéraires</h2></div><div class="grid g3">${tripCards(0,trips)}</div></div></section>`+footer()}

/* ===== itinéraires ===== */
function tripsPage(){return nav("trips")+`<section class="exphero"><div class="wrap"><span class="eyebrow">${t("trips")}</span><h1>Quel voyage au Cambodge voulez-vous faire ?</h1><p class="lead">Choisissez une durée. Chaque itinéraire détaille les étapes jour par jour.</p></div></section><section class="s" style="padding-top:10px"><div class="wrap"><div class="dur" id="dur">${[3,5,7,10,14,21].map(n=>`<button data-d="${n}" class="${n===7?"on":""}">${n}<small>jours</small></button>`).join("")}</div><div class="grid g3" id="tripgrid">${tripCards(7)}</div><div class="shead" style="margin-top:60px"><h2>Tous les itinéraires</h2></div><div class="grid g3">${tripCards(0,TRIPS)}</div></div></section>`+footer()}
function trip(id){const tr=TRIPS.find(x=>x.id===id);if(!tr)return tripsPage();
 return nav("trips")+`<header class="dhero" style="min-height:60vh">${pickVis(tr.route,"hero",11)}<div class="wrap"><div class="crumbs"><a href="#trips">Itinéraires</a> / ${tr.days} jours</div><h1>${tr.name}</h1><p style="font-size:19px;max-width:56ch;margin-top:14px">${tr.pitch}</p></div></header>
 <div class="wrap"><div class="dbody"><div><h2>Jour par jour</h2><ol class="plist">${tr.plan.map(p=>`<li>${p}</li>`).join("")}</ol><h2>Les provinces de cet itinéraire</h2><div class="grid g2">${tr.route.map((r,i)=>dcard(byId(r),"",i)).join("")}</div></div>
 <aside class="side"><div class="box" style="padding:12px"><div class="minimap"><svg viewBox="0 0 880 760" style="width:100%" aria-hidden="true">${mapSVG(true).replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}<polyline points="${tr.route.map(r=>PX(byId(r).lon,byId(r).lat).join(",")).join(" ")}" fill="none" stroke="#B8452B" stroke-width="4" stroke-dasharray="8 6"/>${tr.route.map((r,i)=>{const [x,y]=PX(byId(r).lon,byId(r).lat);return `<circle cx="${x}" cy="${y}" r="11" fill="#17201F" stroke="#fff" stroke-width="3"/><text x="${x}" y="${+y+4}" font-size="11" fill="#fff" text-anchor="middle">${i+1}</text>`}).join("")}</svg></div></div><div class="box"><h4>${tr.days} jours · ${tr.route.length} provinces</h4><p>Rythme : ${tr.days/tr.route.length>=3?"lent":tr.days/tr.route.length>=2?"équilibré":"soutenu"}. Meilleure période : ${bestShort(byId(tr.route[0]))}.</p></div></aside></div></div>`+footer()}

/* ===== infos pratiques ===== */
function info(id){return nav("info")+`<section class="exphero"><div class="wrap"><span class="eyebrow">${t("info")}</span><h1>Le Cambodge pratique</h1><p class="lead">Des infos courtes et précises pour préparer votre voyage. Chaque rubrique renvoie vers le guide détaillé du site.</p></div></section><section class="s" style="padding-top:10px"><div class="wrap"><div class="acc">${INFO.map(i=>`<details id="info-${i.id}" ${i.id===id?"open":""}><summary>${i.t}<span class="kh">${i.kh}</span></summary><p>${i.b}</p>${i.link?`<p style="padding:0"><a class="more" href="${i.link[1]}">${i.link[0]} →</a></p>`:""}</details>`).join("")}</div>
 <div class="shead" style="margin-top:70px"><div><span class="eyebrow">En cas de besoin</span><h2>Urgences, hôpitaux, ambassades</h2></div></div>
 <div class="grid g4">${URGENCES.map(([n,v])=>`<div class="box"><h4>${n}</h4><p style="font-family:var(--serif);font-size:30px;color:var(--lacq)"><a href="tel:${v.replace(/\s/g,"")}">${v}</a></p></div>`).join("")}</div>
 <h3 style="font-size:24px;margin:40px 0 16px">Hôpitaux recommandés</h3><div class="grid g4">${HOPITAUX.map(([n,tel,note])=>`<div class="box"><h4 style="font-size:17px">${n}</h4><p><a href="tel:${tel.replace(/\s/g,"")}">${tel}</a></p><p style="color:var(--mute);margin-top:4px">${note}</p></div>`).join("")}</div>
 <h3 style="font-size:24px;margin:40px 0 16px">Ambassades & consulats à Phnom Penh</h3><div class="grid g4">${AMBASSADES.map(([flag,n,tel,note])=>`<div class="box"><h4 style="font-size:17px">${flag} ${n}</h4><p><a href="tel:${tel.replace(/\s/g,"")}">${tel}</a></p><p style="color:var(--mute);margin-top:4px">${note}</p></div>`).join("")}</div>
 <p class="tri" style="margin-top:18px">⚠️ ${NOTE_URGENCE}</p>
 <div class="shead" style="margin-top:70px"><div><span class="eyebrow">FAQ</span><h2>Questions fréquentes</h2></div></div>
 <div class="acc">${FAQ.map(([q,a])=>`<details><summary style="font-size:20px">${q}</summary><p>${a}</p></details>`).join("")}</div></div></section>`+footer()}

/* ===== favoris ===== */
function favPage(){const l=[...FAV].map(byId).filter(Boolean);return nav("")+`<section class="exphero"><div class="wrap"><span class="eyebrow">${t("fav")}</span><h1>Mon Cambodge</h1><p class="lead">${l.length?"Vos provinces enregistrées, conservées sur cet appareil.":"Rien d'enregistré pour le moment. Touchez ♥ sur une province pour la retrouver ici."}</p></div></section><section class="s" style="padding-top:0"><div class="wrap"><div class="grid g3">${l.map((d,i)=>dcard(d,"",i)).join("")}</div></div></section>`+footer()}

/* ===== routeur ===== */
/* anciennes ancres de l'accueil (liens depuis les autres pages du site) */
const LEGACY={contact:"contact",newsletter:"contact",villes:"featured",quartiers:"featured",hero:"top",vols:"practical",conseils:"practical","partir-france":"practical",transports:"practical"};
function pageTitle(h){const n=h[0]==="dest"&&byId(h[1])?byId(h[1]).name+" : que voir, que faire, où dormir":h[0]==="exp"&&EXPERIENCES.find(x=>x.id===h[1])?EXPERIENCES.find(x=>x.id===h[1]).name+" au Cambodge":h[0]==="trip"&&TRIPS.find(x=>x.id===h[1])?"Itinéraire : "+TRIPS.find(x=>x.id===h[1]).name:h[0]==="explore"?"Les 25 provinces du Cambodge":h[0]==="exp"?"Explorer le Cambodge par expérience":h[0]==="trips"?"Itinéraires au Cambodge":h[0]==="info"?"Infos pratiques Cambodge":h[0]==="fav"?"Mes favoris":"";
 return n?n+" — Le Guide Cambodge":SITE_TITLE}
function render(keep){const h=(location.hash||"#home").slice(1).split("/");const app=$("#app");let html,goto=null;const y=window.scrollY;lbClose();
 if(!(h[0]==="home"||h[0]==="explore"||h[0]==="map"||LEGACY[h[0]])){MAP_GEN++;removeCurrentMap()}
 if(h[0]==="mentions"){location.replace("mentions-legales/");return}
 if(LEGACY[h[0]]){goto=LEGACY[h[0]];html=home()}
 else switch(h[0]){case"explore":html=explore();break;case"dest":html=dest(h[1]);break;case"exp":html=h[1]?exp(h[1]):expList();break;case"trips":html=tripsPage();break;case"trip":html=trip(h[1]);break;case"info":html=info(h[1]);break;case"fav":html=favPage();break;default:html=home();if(h[0]==="map")goto="map"}
 app.innerHTML=html;document.title=pageTitle(h);affiliate(app);bind();
 if(keep===true)window.scrollTo(0,y);
 else if(goto){const el=document.getElementById(goto);setTimeout(()=>el&&el.scrollIntoView({behavior:goto==="top"?"auto":"smooth"}),60)}
 else if(h[0]==="info"&&h[1]){const el=document.getElementById("info-"+h[1]);el&&setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"center"}),100)}
 else window.scrollTo(0,0);
 document.querySelectorAll("section.s, .card, .trip, .gem").forEach(el=>{el.classList.add("rv");io.observe(el)})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});
function bind(){
 document.querySelectorAll(".mapfilters .chip").forEach(c=>c.onclick=()=>{document.querySelectorAll(".mapfilters .chip").forEach(x=>x.classList.remove("on"));c.classList.add("on");ACTIVE_FILTER=c.dataset.f;applyMapFilter()});
 const lm=document.querySelector(".leafmap");if(lm)initInteractiveMap(lm.id);
 document.querySelectorAll("#dur button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#dur button").forEach(x=>x.classList.remove("on"));b.classList.add("on");$("#tripgrid").innerHTML=tripCards(+b.dataset.d);affiliate($("#tripgrid"))});
 document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=ev=>{ev.preventDefault();ev.stopPropagation();const id=b.dataset.fav;FAV.has(id)?FAV.delete(id):FAV.add(id);try{localStorage.setItem("gc-fav",JSON.stringify([...FAV]))}catch(e){}render(true)});
 document.querySelectorAll(".ttoc a[data-go]").forEach(a=>a.onclick=ev=>{ev.preventDefault();const el=document.getElementById(a.dataset.go);el&&el.scrollIntoView({behavior:"smooth"})});
 const sb=$("#sbtn");if(sb)sb.onclick=()=>openSearch();const hs=$("#hsearch input");if(hs){hs.onfocus=()=>{openSearch(hs.value);hs.blur()}}
 const lb=$("#lang");if(lb)lb.onclick=()=>{LANG=LANG==="fr"?"kh":"fr";render(true)};const bg=$("#burger");if(bg)bg.onclick=()=>$("#menu").classList.toggle("open");
 document.querySelectorAll(".mt").forEach(b=>b.onclick=()=>lbOpen(MEDIA[b.closest(".mgrid").dataset.p],+b.dataset.i));
 document.querySelectorAll(".mbtn").forEach(b=>b.onclick=()=>{const [p,i]=b.dataset.pl.split(":");lbOpen(MEDIA[p].filter(x=>x.at&&x.at.includes(+i)),0)});
 const gm=$("[data-more]");if(gm)gm.onclick=()=>{document.querySelectorAll(".mgrid .mt[hidden]").forEach(t=>t.hidden=false);gm.remove()};
 bindForms()}

/* ===== recherche ===== */
function openSearch(q){$("#so").classList.add("open");const i=$("#so input");i.value=q||"";doSearch(i.value);setTimeout(()=>i.focus(),50)}
function closeSearch(){$("#so").classList.remove("open")}
function doSearch(q){q=norm(q).trim();const r=[];const push=(n,s,h)=>r.push(`<a href="${h}" data-close="1"><span>${n}</span><small>${s}</small></a>`);
 const dm=/^(\d+)\s*j/.exec(q);
 DEST.forEach(d=>{const hay=norm(d.name+d.kh+d.tag+d.intro+d.places.join()+d.hidden.join()+d.todo.join());if(!q||hay.includes(q))push(d.name,"Province · "+REGIONS[d.region],"#dest/"+d.id)});
 EXPERIENCES.forEach(e=>{if(!q||norm(e.name+e.blurb).includes(q))push(e.name,"Expérience","#exp/"+e.id)});
 TRIPS.forEach(tr=>{if(!q||norm(tr.name+tr.pitch).includes(q)||(dm&&Math.abs(tr.days-dm[1])<=2))push(tr.name,tr.days+" jours","#trip/"+tr.id)});
 INFO.forEach(i=>{if(!q||norm(i.t+i.b).includes(q))push(i.t,"Infos pratiques","#info/"+i.id)});
 const box=$("#so .res");box.innerHTML=r.slice(0,24).join("")||`<p class="nores">Aucun résultat. Essayez une province, une activité ou « 7 jours ».</p>`;
 box.querySelectorAll("a[data-close]").forEach(a=>a.onclick=closeSearch)}

/* ===== formulaires (contact : Formspree · newsletter : Brevo) ===== */
const FORMSPREE_URL="https://formspree.io/f/xqevzpwj";
const BREVO_URL="https://1cd30bc5.sibforms.com/serve/MUIFADOnc6pbnX7ny8BQKlCADBivwA1AWnlwlB52zwZxDNf4tnknIirxh7moYlblQuZW0LdCttPO3Cco3dq8D2zS1dGqykOc429P9OI2B_F5gZKbWelvUItMgQ6T8SG8bpb7CMjnfoXXlSV6jWBCy8uUNlPPU9lDLKxHJIEzTlTpbQM8ex71aaNiV6HfV6uJRjaE1YXbwl2USqWieg==";
const clean=(s,n)=>String(s).replace(/<[^>]*>/g,"").replace(/[<>"'&]/g,c=>({"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","&":"&amp;"}[c])).trim().slice(0,n||500);
function bindForms(){
 const cf=$("#contact-form");
 if(cf){const ok=$("#form-success"),ko=$("#form-error"),btn=cf.querySelector("button[type=submit]");
  const err=m=>{ko.textContent=m;ko.style.display="block"};
  cf.onsubmit=e=>{e.preventDefault();ko.style.display="none";
   if($("#contact-honey").value.length>0)return;
   try{if(Date.now()-parseInt(localStorage.getItem("gc_ct_last")||"0")<30000){err("⚠️ Veuillez patienter 30 secondes avant d'envoyer un nouveau message.");return}}catch(x){}
   const name=clean($("#contact-name").value,80),email=$("#contact-email").value.trim().slice(0,120),sujet=clean($("#contact-sujet").value,60),msg=clean($("#contact-message").value,1000);
   if(!name||!email||!msg){err("⚠️ Veuillez remplir tous les champs obligatoires.");return}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){err("⚠️ Veuillez entrer une adresse e-mail valide (ex : marie@exemple.com).");return}
   if(name.length<2){err("⚠️ Votre prénom doit contenir au moins 2 caractères.");return}
   if(msg.length<10){err("⚠️ Votre message est trop court (minimum 10 caractères).");return}
   btn.disabled=true;btn.textContent="Envoi en cours…";try{localStorage.setItem("gc_ct_last",Date.now().toString())}catch(x){}
   fetch(FORMSPREE_URL,{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify({name,email,sujet,message:msg})})
    .then(r=>{if(r.ok){ok.style.display="block";cf.reset();setTimeout(()=>ok.style.display="none",6000)}else err("⚠️ Erreur lors de l'envoi. Veuillez réessayer dans quelques instants.")})
    .catch(()=>err("⚠️ Connexion impossible. Vérifiez votre connexion internet et réessayez."))
    .finally(()=>{btn.disabled=false;btn.textContent="Envoyer le message"})}}
 const nf=$("#nl-form");
 if(nf){const ok=$("#nl-success"),ko=$("#nl-error"),btn=nf.querySelector("button[type=submit]");
  const err=m=>{ko.textContent=m;ko.style.display="block"};
  nf.onsubmit=e=>{e.preventDefault();ko.style.display="none";
   if($("#nl-honey").value)return;
   const prenom=$("#nl-prenom").value.trim(),nom=$("#nl-nom").value.trim(),email=$("#nl-email").value.trim(),rgpd=$("#nl-rgpd").checked;
   try{if(Date.now()-parseInt(sessionStorage.getItem("nl_last")||"0")<30000){err("⚠️ Veuillez patienter avant de soumettre à nouveau.");return}}catch(x){}
   if(!prenom||!nom||!email||!rgpd){err("⚠️ Veuillez remplir tous les champs et cocher la case de consentement.");return}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err("⚠️ Veuillez entrer une adresse e-mail valide (ex : marie@exemple.com).");return}
   try{sessionStorage.setItem("nl_last",Date.now().toString())}catch(x){}
   btn.disabled=true;const body=new FormData();body.append("EMAIL",email);body.append("email_address_check","");body.append("locale","fr");body.append("html_type","simple");
   fetch(BREVO_URL,{method:"POST",body,mode:"no-cors"}).then(()=>{nf.reset();ok.style.display="block";setTimeout(()=>ok.style.display="none",6000)}).catch(()=>err("⚠️ Une erreur est survenue. Veuillez réessayer.")).finally(()=>{btn.disabled=false})}}}

/* ===== affiliation Booking.com via CJ Affiliate (identique à l'ancien site) ===== */
function affiliate(root){root.querySelectorAll('a[href*="booking.com"]:not([data-cj-done])').forEach(a=>{try{a.href="https://www.tkqlhce.com/click-101812079-12677526?url="+encodeURIComponent(a.href);a.setAttribute("data-cj-done","1")}catch(e){}})}

/* ===== cookies (RGPD) ===== */
function cookies(){const b=$("#cookie-banner");if(!b)return;
 try{if(localStorage.getItem("gc_consent")){b.classList.add("hidden");return}}catch(e){b.classList.add("hidden");return}
 b.classList.remove("hidden");
 const upd=v=>{if(typeof gtag==="function")gtag("consent","update",{ad_storage:v,analytics_storage:v})};
 $("#cookie-ok").onclick=()=>{try{localStorage.setItem("gc_consent","accepted")}catch(e){}b.classList.add("hidden");upd("granted")};
 $("#cookie-no").onclick=()=>{try{localStorage.setItem("gc_consent","refused")}catch(e){}b.classList.add("hidden");upd("denied")}}

/* ===== démarrage ===== */
window.addEventListener("hashchange",()=>render());
document.addEventListener("DOMContentLoaded",()=>{render();cookies();
 $("#so input").oninput=e=>doSearch(e.target.value);$("#so .x").onclick=closeSearch;
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeSearch();lbClose()}const b=$("#lbx");if(b&&!b.hidden){if(e.key==="ArrowLeft")lbStep(-1);if(e.key==="ArrowRight")lbStep(1)}});
 const lb=$("#lbx");if(lb){lb.querySelector(".lbx-x").onclick=lbClose;lb.querySelector(".lbx-p").onclick=()=>lbStep(-1);lb.querySelector(".lbx-n").onclick=()=>lbStep(1);
  lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("lbx-media")||e.target.tagName==="FIGURE")lbClose()};
  let sx=null;lb.addEventListener("touchstart",e=>{sx=e.touches.length===1?e.touches[0].clientX:null},{passive:true});
  lb.addEventListener("touchend",e=>{if(sx===null||LB.list.length<2)return;const dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>60)lbStep(dx<0?1:-1)},{passive:true})}
 const q=new URLSearchParams(location.search).get("q");if(q)openSearch(q)});

/* ===== PWA : service worker (identique à l'ancien site) ===== */
if("serviceWorker" in navigator){
 window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(reg=>{reg.addEventListener("updatefound",()=>{const w=reg.installing;if(!w)return;w.addEventListener("statechange",()=>{if(w.state==="activated")window.location.reload()})})}).catch(()=>{})});
 navigator.serviceWorker.addEventListener("controllerchange",()=>window.location.reload())}
