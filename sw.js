// Service Worker mínim per a PWA — simplement passa les peticions a la xarxa
// No fa cache (les dades del Sheet han d'estar sempre actualitzades)
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
