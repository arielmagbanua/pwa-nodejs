module.exports = {
  "maximumFileSizeToCacheInBytes": 20 * 1024 * 1024,
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{jpg,js,css,html}"
  ],
  "swDest": "public\\sw.js",
  "swSrc": "./src/js/service-worker.js"
};