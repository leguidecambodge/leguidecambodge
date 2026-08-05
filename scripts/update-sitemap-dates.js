#!/usr/bin/env node
/*
 * Met à jour chaque <lastmod> de sitemap.xml avec la vraie date du dernier
 * commit git qui a touché le fichier correspondant — jamais une date
 * arbitraire, pour ne pas envoyer de faux signal de fraîcheur à Google/Bing.
 * Exécuté par .github/workflows/update-sitemap.yml (à chaque push sur main).
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'sitemap.xml');
const DRY_RUN = process.argv.includes('--dry-run');

function fileForLoc(loc) {
  const url = new URL(loc);
  const slug = url.pathname.replace(/^\/|\/$/g, ''); // enlève les / de début/fin
  if (slug === '') return 'index.html'; // page d'accueil, y compris les ancres #...
  return path.join(slug, 'index.html');
}

function lastCommitDate(relFile) {
  try {
    const out = execSync(`git log -1 --format=%cd --date=short -- "${relFile}"`, { cwd: ROOT }).toString().trim();
    return out || null;
  } catch (e) {
    return null;
  }
}

let xml = fs.readFileSync(SITEMAP, 'utf8');
let changedCount = 0;
const log = [];

const urlBlockRe = /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;

xml = xml.replace(urlBlockRe, function(full, loc, oldDate) {
  const relFile = fileForLoc(loc);
  if (!fs.existsSync(path.join(ROOT, relFile))) {
    console.log('Fichier introuvable pour ' + loc + ' (' + relFile + '), ignoré.');
    return full;
  }
  const newDate = lastCommitDate(relFile);
  if (!newDate || newDate === oldDate) return full;

  changedCount++;
  log.push(loc + ' (' + relFile + ') : ' + oldDate + ' -> ' + newDate);
  return full.replace('<lastmod>' + oldDate + '</lastmod>', '<lastmod>' + newDate + '</lastmod>');
});

console.log(changedCount + ' lastmod mis à jour :');
log.forEach(l => console.log('  - ' + l));

if (DRY_RUN) {
  console.log('\n[--dry-run] Aucun fichier écrit.');
} else if (changedCount > 0) {
  fs.writeFileSync(SITEMAP, xml);
  console.log('\nsitemap.xml mis à jour.');
} else {
  console.log('\nRien à changer, fichier non touché.');
}

process.exitCode = changedCount > 0 ? 1 : 0;
