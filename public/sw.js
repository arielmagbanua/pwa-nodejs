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
  },
  {
    "url": "images/thumbnails/20180317-flower-1.jpg",
    "revision": "fe23bd2794dece9d42747c517d6103ec"
  },
  {
    "url": "images/thumbnails/20180317-flower-2.jpg",
    "revision": "092349130e03a978f8732b99d362f257"
  },
  {
    "url": "images/thumbnails/20180317-flower-3.jpg",
    "revision": "99774826bc09d580c9a4c9834f1273bc"
  },
  {
    "url": "images/thumbnails/20180331-flower-4.jpg",
    "revision": "78d85de4a59d2a32413603959db7dae5"
  },
  {
    "url": "images/thumbnails/20180331-food-1.jpg",
    "revision": "3062f3c40365bf8ff5aede2f98e4e120"
  },
  {
    "url": "images/thumbnails/20180331-food-2.jpg",
    "revision": "a42e0f3b591444cadbd03ddfc4bc969f"
  },
  {
    "url": "images/thumbnails/20180402-flower-5.jpg",
    "revision": "7e919f1033c826ae223de59b2300b4de"
  },
  {
    "url": "images/thumbnails/20180402-flower-6.jpg",
    "revision": "e552a93821870b06a93d321611fec77d"
  },
  {
    "url": "images/thumbnails/20180407-cake-1.jpg",
    "revision": "1690b6896b5e4c75f28a361cb0851800"
  }
]);

workbox.routing.registerRoute(
    'http://localhost:9000/api/my-data',
    workbox.strategies.networkFirst()
);