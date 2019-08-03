importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "551256d19774b5291d0a2f24d1513d1d"
  },
  {
    "url": "js/apiImages.js",
    "revision": "0096b0ee0635c4877d408ac6e0ab4e15"
  },
  {
    "url": "js/stackImages.js",
    "revision": "360d659c29fac9a142387864b02c99a4"
  },
  {
    "url": "styles/stackImages.css",
    "revision": "8ffd702d617fc9ff80b8e4928972a5fd"
  }
]);

workbox.routing.registerRoute(
    'http://localhost:9000/api/my-data',
    workbox.strategies.networkFirst()
);