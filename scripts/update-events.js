#!/usr/bin/env node
/*
 * Fait avancer d'un an les événements de STATIC_EVENTS (evenements/index.html)
 * une fois qu'ils sont passés, pour que les fêtes annuelles récurrentes restent
 * toujours à jour. Met à jour dateModified uniquement si un événement a été
 * avancé. Exécuté par .github/workflows/update-events.yml (hebdomadaire).
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'evenements', 'index.html');
const DRY_RUN = process.argv.includes('--dry-run');

// Comparaison en chaînes "YYYY-MM-DD" (tri lexicographique = tri chronologique),
// jamais d'objet Date pour la logique "passé/futur" : évite tout souci de fuseau
// horaire entre l'environnement local et le runner GitHub Actions (UTC).
const todayStr = new Date().toISOString().slice(0, 10);

function addYear(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return (y + 1) + '-' + String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
}

let html = fs.readFileSync(FILE, 'utf8');
let changedCount = 0;
const log = [];

// Ne cible que les objets STATIC_EVENTS : signature date:'YYYY-MM-DD' (+ fin optionnel) suivie de titre:
const eventRe = /date:\s*'(\d{4}-\d{2}-\d{2})'(?:\s*,\s*fin:\s*'(\d{4}-\d{2}-\d{2})')?\s*,\s*titre:\s*'([^']*)'/g;

html = html.replace(eventRe, function(full, dateStr, finStr, titre) {
  const refStr = finStr || dateStr;
  if (refStr >= todayStr) return full; // pas encore passé, on ne touche pas

  const newDate = addYear(dateStr);
  const newFin = finStr ? addYear(finStr) : null;
  changedCount++;
  log.push(titre + ' : ' + dateStr + (finStr ? '..' + finStr : '') + ' -> ' + newDate + (newFin ? '..' + newFin : ''));

  let out = full.replace("date:'" + dateStr + "'", "date:'" + newDate + "'");
  if (finStr) out = out.replace("fin:'" + finStr + "'", "fin:'" + newFin + "'");
  return out;
});

if (changedCount > 0) {
  html = html.replace(/"dateModified":\s*"\d{4}-\d{2}-\d{2}"/, '"dateModified": "' + todayStr + '"');
}

console.log(changedCount + ' événement(s) avancé(s) :');
log.forEach(l => console.log('  - ' + l));

if (DRY_RUN) {
  console.log('\n[--dry-run] Aucun fichier écrit.');
} else if (changedCount > 0) {
  fs.writeFileSync(FILE, html);
  console.log('\nevenements/index.html mis à jour.');
} else {
  console.log('\nRien à changer, fichier non touché.');
}
