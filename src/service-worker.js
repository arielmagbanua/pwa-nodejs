importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([]);

// cache all google fonts
workbox.routing.registerRoute(
    'https://fonts.googleapis.com/(.*)',
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24, // bust the cache after 24 hours
                maxEntries: 30,
            })
        ]
    })
);

// best images page
workbox.routing.registerRoute(
    new RegExp('\/best-images$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'route',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

// favorites tweet
workbox.routing.registerRoute(
    new RegExp('\/favorite-tweets$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'route',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

// cache page index
workbox.routing.registerRoute(
    new RegExp('\/$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'route',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

// register any invoked twitter favorites route for any twitter user.
workbox.routing.registerRoute(
    new RegExp('api\/twitter\/[0-9a-zA-Z_]+\/favorites'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'api',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('\/images\/large\/(.+)\.(jpg|jpeg|png|gif)$'),
    new workbox.strategies.CacheFirst({
        cacheName: 'images-large',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30, // bust the cache after 30 days
                maxEntries: 50,
            })
        ]
    })
);