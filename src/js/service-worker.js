importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
        /(.*)images(.*)\.(?:png|gif|jpg)/,
        workbox.strategies.CacheFirst({
            cacheName: 'images-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /(.*)js(.*)\.(js)/,
        workbox.strategies.CacheFirst({
            cacheName: 'js-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /(.*)styles(.*)\.(css)/,
        workbox.strategies.CacheFirst({
            cacheName: 'styles-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /(.*)views(.*)\.(html)/,
        workbox.strategies.CacheFirst({
            cacheName: 'html-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );
} else {
    console.log(`Boo! Workbox didn't load!`);
}