importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    new RegExp('\/best-images$'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'route@best-images'
    })
);

workbox.routing.registerRoute(
    new RegExp('\/$'),
    new workbox.strategies.NetworkFirst()
);

// register any invoked twitter favorites route for any twitter user.
workbox.routing.registerRoute(
    new RegExp('api\/twitter\/[0-9a-zA-Z_]+\/favorites'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('\/images\/large\/(.+)\.(jpg|jpeg|png|gif)$'),
    new workbox.strategies.StaleWhileRevalidate()
);