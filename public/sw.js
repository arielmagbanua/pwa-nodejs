importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  {
    "url": "js/bundle.js",
    "revision": "83148cf72295f2958a101fe0846d88c7"
  },
  {
    "url": "styles/best-images.css",
    "revision": "0c2216d66a778ba7a7f55ac10c451817"
  },
  {
    "url": "images/thumbnails/20180316-rust-1.jpg",
    "revision": "28b41bb7f1c6d57a8a32b389e777dbff"
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
    "url": "images/thumbnails/20180331-light-1.jpg",
    "revision": "5cf3c9f3babb98d588961a2f48846b7b"
  },
  {
    "url": "images/thumbnails/20180401-golden-1.jpg",
    "revision": "5e83bb5ea00bc86533cedf7766376d36"
  },
  {
    "url": "images/thumbnails/20180401-heart-1.jpg",
    "revision": "8fd801f1a21e5308380e21adea31305e"
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
    new RegExp('\/twitter\/[0-9a-zA-Z_]+\/favorites'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('\/images\/large\/(.+)\.(jpg|jpeg|png|gif)$'),
    new workbox.strategies.StaleWhileRevalidate()
);