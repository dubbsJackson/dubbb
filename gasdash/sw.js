/* GasDash — self-retiring service worker.
 *
 * Earlier builds cached the app shell cache-first, which could pin a
 * returning visitor to a stale (or half-deployed) build — showing a blank
 * screen every visit while fresh visitors were fine. This version caches
 * nothing: on activation it deletes every cache, unregisters itself, and
 * reloads any open tabs so they load straight from the network. Once it has
 * run, the app no longer registers a service worker at all. */

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        try {
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));
            await self.registration.unregister();
            const clients = await self.clients.matchAll({ type: 'window' });
            for (const client of clients) {
                try { client.navigate(client.url); } catch (_) { /* ignore */ }
            }
        } catch (_) {
            /* best effort — nothing more we can do from here */
        }
    })());
});

// Never intercept requests: always let the network serve fresh files.
