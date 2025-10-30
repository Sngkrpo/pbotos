const CACHE_NAME = 'pbotos-app-v1.0';
const urlsToCache = [
  '/pbotos-app/',
  '/pbotos-app/index.html',
  '/pbotos-app/manifest.json',
  '/pbotos-app/icon-192.png',
  '/pbotos-app/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});