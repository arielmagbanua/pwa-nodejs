importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.cleanupOutdatedCaches();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  {
    "url": "js/bestImages.js",
    "revision": "8eff0f6b8480ae1a6859bd8973677512"
  },
  {
    "url": "js/bi.js",
    "revision": "341f78c7ab9b2c66fdc170210a8ebcfe"
  },
  {
    "url": "js/bundle.js",
    "revision": "76e96606bc53a6db213a3526923f5dfc"
  },
  {
    "url": "js/tf.js",
    "revision": "fe7c4810a7d92b3ed54725a04f66bd17"
  },
  {
    "url": "js/twitterFavorites.js",
    "revision": "9deb9458bbc02ff3694b99bb7ee25d57"
  },
  {
    "url": "styles/best-images.css",
    "revision": "978ffc22e4b5672b6fc1b19de69a9631"
  },
  {
    "url": "styles/twitter-favorites.css",
    "revision": "94fa37b27c1863655fa58705a5b2088e"
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

// slides page
workbox.routing.registerRoute(
    new RegExp('\/slides$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'route',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
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

// register and cache all embedded presentation docs 
workbox.routing.registerRoute(
    new RegExp('docs\.google\.com\/presentation\/'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'google-docs',
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