/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*****************************!*\
  !*** ./src/js/apiImages.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// Check that service workers are supported\nif ('serviceWorker' in navigator) {\n  // Use the window load event to keep the page load performant\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('/js/service-worker.js');\n  });\n}\n\n(function () {\n  var photoListSection = document.querySelector('#photo-grid > ul.my-masonry-image-list');\n  fetch('/api/images').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var images = data.images;\n    images.forEach(function (item) {\n      var grid = document.createElement('li');\n      grid.classList.add('mdc-image-list__item');\n      grid.classList.add('photo-container');\n      var image = document.createElement('img');\n      image.src = '/' + item.path;\n      image.classList.add('mdc-image-list__image');\n      var labelContainer = document.createElement('div');\n      labelContainer.classList.add('mdc-image-list__supporting');\n      var label = document.createElement('span');\n      label.classList.add('mdc-image-list__label');\n      labelContainer.appendChild(label);\n      grid.appendChild(image);\n      grid.appendChild(labelContainer); // grid.innerHTML = gridContent.trim();\n\n      photoListSection.appendChild(grid);\n    });\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBpSW1hZ2VzLmpzPzYxNDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hlY2sgdGhhdCBzZXJ2aWNlIHdvcmtlcnMgYXJlIHN1cHBvcnRlZFxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgLy8gVXNlIHRoZSB3aW5kb3cgbG9hZCBldmVudCB0byBrZWVwIHRoZSBwYWdlIGxvYWQgcGVyZm9ybWFudFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9qcy9zZXJ2aWNlLXdvcmtlci5qcycpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgICBsZXQgcGhvdG9MaXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG90by1ncmlkID4gdWwubXktbWFzb25yeS1pbWFnZS1saXN0Jyk7XHJcblxyXG4gICAgZmV0Y2goJy9hcGkvaW1hZ2VzJykudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBkYXRhLmltYWdlcztcclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnbWRjLWltYWdlLWxpc3RfX2l0ZW0nKTtcclxuICAgICAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgncGhvdG8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLycgKyBpdGVtLnBhdGg7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdtZGMtaW1hZ2UtbGlzdF9faW1hZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21kYy1pbWFnZS1saXN0X19zdXBwb3J0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGMtaW1hZ2UtbGlzdF9fbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQobGFiZWxDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGdyaWQuaW5uZXJIVE1MID0gZ3JpZENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgcGhvdG9MaXN0U2VjdGlvbi5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcGlJbWFnZXMuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);