importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    'http://localhost:9000/api/my-data',
    workbox.strategies.networkFirst()
);