self.addEventListener('install', function(e) {
  console.log('Service Worker installiert');
  e.waitUntil(
    caches.open('bild-konverter-cache').then(function(cache) {
      return cache.addAll(['index.html']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
