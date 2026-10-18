/* ===== couleurs « façon Google Maps » pour les cartes MapLibre (accueil + carte-interactive/)
   On part du style gratuit OpenFreeMap « liberty » et on recolore ses calques avant de créer la carte
   (pas de flash des anciennes couleurs). Fond gris clair, petites rues blanches, grands axes jaune-orangé,
   eau bleu ciel, parcs vert pâle. Si la recoloration échoue, on garde le style liberty d'origine. ===== */
(function(){
  var URL = 'https://tiles.openfreemap.org/styles/liberty';
  var cache = null;
  function recolor(style){
    style.layers.forEach(function(l){
      var sl = l['source-layer'] || '', id = l.id, p = l.paint = l.paint || {};
      if(l.type === 'background') p['background-color'] = '#f5f3f0';
      if(sl === 'water' && l.type === 'fill') p['fill-color'] = '#aadaff';
      if(sl === 'waterway' && l.type === 'line') p['line-color'] = '#aadaff';
      if((sl === 'park' || /park|wood|grass|forest/.test(id)) && l.type === 'fill'){ p['fill-color'] = '#c8ebc0'; p['fill-opacity'] = 1; }
      if(sl === 'landuse' && l.type === 'fill' && /residential/.test(id)) p['fill-color'] = '#efeeea';
      if(sl === 'building' && l.type.indexOf('fill') === 0) p[l.type+'-color'] = '#e8e6e1';
      if(sl === 'transportation' && l.type === 'line'){
        if(/casing/.test(id)) p['line-color'] = /motorway|trunk/.test(id) ? '#f2b25c' : '#dcdad5';
        else if(/motorway|trunk/.test(id)) p['line-color'] = '#fcd77b';
        else if(/primary|secondary|tertiary|minor|service|street/.test(id)) p['line-color'] = '#ffffff';
      }
    });
    return style;
  }
  window.gcStyleGoogle = function(){
    if(!cache) cache = fetch(URL).then(function(r){ return r.json(); }).then(recolor).catch(function(){ cache = null; return URL; });
    /* copie à chaque appel : l'accueil recrée sa carte à chaque changement de page */
    return cache.then(function(s){ return typeof s === 'string' ? s : JSON.parse(JSON.stringify(s)); });
  };
})();
