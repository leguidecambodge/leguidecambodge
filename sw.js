/* ============================================
   Service Worker — Le Guide Cambodge
   Stratégie : Cache First + Stale-While-Revalidate
   v2 — optimisé pour connexions lentes
   ============================================ */

const CACHE_NAME = 'leguidecambodge-v2';

/* Ressources critiques mises en cache dès l'installation */
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sitemap.xml',
  /* Leaflet — bibliothèque carte interactive */
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  /* Polices Google */
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap'
];

/* ── Installation : mise en cache initiale ── */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      /* PRECACHE en no-cors pour les ressources cross-origin */
      return Promise.allSettled(
        PRECACHE.map(function(url) {
          return cache.add(new Request(url, { mode: 'no-cors' }));
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

/* ── Activation : supprime les anciens caches ── */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* ── Fetch : Cache First, fallback réseau ── */
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  /* APIs dynamiques — toujours fraîches */
  if (event.request.url.includes('formspree.io')) return;
  if (event.request.url.includes('open-meteo.com')) return;
  if (event.request.url.includes('google-analytics.com')) return;
  if (event.request.url.includes('googletagmanager.com')) return;
  if (event.request.url.includes('translate.google')) return;
  if (event.request.url.includes('openstreetmap.org')) return;
  /* HTML — toujours récupérer la version fraîche (contenu éditorial) */
  if (event.request.destination === 'document') return;
  if (/\.html(\?|$)/i.test(event.request.url)) return;
  /* Vidéos et range requests — streaming natif du navigateur */
  if (event.request.destination === 'video' || event.request.destination === 'audio') return;
  if (event.request.headers.get('range')) return;
  if (/\.(mp4|webm|ogg|mov|avi)(\?|$)/i.test(event.request.url)) return;
  /* Photos locales — trop lourdes pour le cache SW */
  if (event.request.url.includes('/photos/')) return;

  /* Stratégie Stale-While-Revalidate pour les polices et scripts CDN */
  const isCDN = event.request.url.includes('fonts.googleapis.com')
             || event.request.url.includes('fonts.gstatic.com')
             || event.request.url.includes('unpkg.com');

  if (isCDN) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cached) {
          /* Lancer une mise à jour en arrière-plan */
          var fetchPromise = fetch(event.request).then(function(response) {
            if (response && response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          });
          /* Retourner le cache immédiatement, ou attendre le réseau */
          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  /* Stratégie Cache First pour tout le reste */
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function() {
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
