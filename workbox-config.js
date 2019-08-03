module.exports = {
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
  globDirectory: "public/",
  globPatterns: [
    "**/*.{js,css,html}",
    "images/thumbnails/*.jpg"
  ],
  swDest: "public/sw.js",
  swSrc: "./src/js/service-worker.js"
};