self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('offline-cache').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/lib/jsQR.js',
        '/logo.png',
        '/manifest.webmanifest',
        '/worker.js'
      ])),
    );
  });

  self.addEventListener('fetch', (e) => {
    e.respondWith(
      fetch(e.request)
      .catch(() => caches.match(e.request)));
  });