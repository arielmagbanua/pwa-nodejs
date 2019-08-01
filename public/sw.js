importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute([
  {
    "url": "images/20190713-zeald-fam-100.jpg",
    "revision": "9a231147bf126046a6dc09bf0f49bbd5"
  },
  {
    "url": "images/20190713-zeald-fam-118.jpg",
    "revision": "22ec93504e6119e732205412ee9f80ee"
  },
  {
    "url": "images/20190713-zeald-fam-126.jpg",
    "revision": "d4398f2d9bf302fb20853dd1815d8b16"
  },
  {
    "url": "images/20190713-zeald-fam-128.jpg",
    "revision": "d975bd9ef3681b4f4ea54cb4ec6d9408"
  },
  {
    "url": "images/20190713-zeald-fam-171.jpg",
    "revision": "b5e420c80c441f688e82b82c7a35de9b"
  },
  {
    "url": "images/20190713-zeald-fam-178.jpg",
    "revision": "dd2cae068e8e2429e0c4939c48435175"
  },
  {
    "url": "images/20190713-zeald-fam-180.jpg",
    "revision": "e12a8b6a6b2b5536b3646f1c9fe1b53b"
  },
  {
    "url": "images/20190713-zeald-fam-189.jpg",
    "revision": "9a340dd6daa3b1867eb37beb50fd4137"
  },
  {
    "url": "images/20190713-zeald-fam-190.jpg",
    "revision": "423d105c99877c68cb51153a0bcb53b6"
  },
  {
    "url": "images/20190713-zeald-fam-221.jpg",
    "revision": "69557481a819612ad392bc9a0e38ece5"
  },
  {
    "url": "images/20190713-zeald-fam-23.jpg",
    "revision": "9ebe11ce010a0a7a6f8eaea47634ae0c"
  },
  {
    "url": "images/20190713-zeald-fam-26.jpg",
    "revision": "4a92c178b4639bde7ca7f0b824a9af5f"
  },
  {
    "url": "images/20190713-zeald-fam-28.jpg",
    "revision": "effa02448550ea224b0d3adb90d33fbf"
  },
  {
    "url": "images/20190713-zeald-fam-5.jpg",
    "revision": "74eb04e3b0d03e536b82b9de0ad70282"
  },
  {
    "url": "images/20190713-zeald-fam-57.jpg",
    "revision": "4ffef80764ef29e32934e8e6af082453"
  },
  {
    "url": "js/apiImages.js",
    "revision": "bacf08e43cfff5018d37e7579e507bab"
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
    "url": "views/api-images.html",
    "revision": "7412271ac792fc8afd31fd4d82c7509b"
  },
  {
    "url": "views/index.html",
    "revision": "d57492e112ecd7b0beeec864c130fc69"
  },
  {
    "url": "views/static-images.html",
    "revision": "a41fc7ce683d30d8f4a2e99ca822b94a"
  }
]);

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