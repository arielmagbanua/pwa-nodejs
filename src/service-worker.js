importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([]);

// best images page
workbox.routing.registerRoute(
    new RegExp('\/best-images$'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'route'
    })
);

// favorites tweet
workbox.routing.registerRoute(
    new RegExp('\/favorite-tweets$'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'route'
    })
);

// cache page index
workbox.routing.registerRoute(
    new RegExp('\/$'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'route'
    })
);

// register any invoked twitter favorites route for any twitter user.
workbox.routing.registerRoute(
    new RegExp('api\/twitter\/[0-9a-zA-Z_]+\/favorites'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'api'
    })
);

workbox.routing.registerRoute(
    new RegExp('\/images\/large\/(.+)\.(jpg|jpeg|png|gif)$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images-large'
    })
);