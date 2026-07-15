/* GasDash service worker — cache-first for app shell, network-first for tiles */
const CACHE = 'gasdash-v4';
const SHELL = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'icon.svg', 'icon-maskable.svg', 'vendor/leaflet.js', 'vendor/leaflet.css'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);
    if (e.request.method !== 'GET') return;
    // map tiles + CDN: network first, no cache growth
    if (url.origin !== location.origin) {
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
        return;
    }
    e.respondWith(
        caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
            return res;
        }))
    );
});
