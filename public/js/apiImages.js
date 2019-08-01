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

eval("(function () {\n  var photoListSection = document.querySelector('#photo-grid > ul.my-masonry-image-list');\n  fetch('/api/images').then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var images = data.images;\n    images.forEach(function (item) {\n      var grid = document.createElement('li');\n      grid.classList.add('mdc-image-list__item');\n      grid.classList.add('photo-container');\n      var image = document.createElement('img');\n      image.src = '/' + item.path;\n      image.classList.add('mdc-image-list__image');\n      var labelContainer = document.createElement('div');\n      labelContainer.classList.add('mdc-image-list__supporting');\n      var label = document.createElement('span');\n      label.classList.add('mdc-image-list__label');\n      labelContainer.appendChild(label);\n      grid.appendChild(image);\n      grid.appendChild(labelContainer); // grid.innerHTML = gridContent.trim();\n\n      photoListSection.appendChild(grid);\n    });\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBpSW1hZ2VzLmpzPzYxNDYiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAgIGxldCBwaG90b0xpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob3RvLWdyaWQgPiB1bC5teS1tYXNvbnJ5LWltYWdlLWxpc3QnKTtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS9pbWFnZXMnKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGRhdGEuaW1hZ2VzO1xyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdtZGMtaW1hZ2UtbGlzdF9faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdwaG90by1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSAnLycraXRlbS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWRjLWltYWdlLWxpc3RfX2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWRjLWltYWdlLWxpc3RfX3N1cHBvcnRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ21kYy1pbWFnZS1saXN0X19sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChsYWJlbENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ3JpZC5pbm5lckhUTUwgPSBncmlkQ29udGVudC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBwaG90b0xpc3RTZWN0aW9uLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwaUltYWdlcy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);