/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var templite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(obj) {
	var locale='', tree = obj || {};

	return {
		set(lang, table) {
			tree[lang] = Object.assign(tree[lang] || {}, table);
		},

		locale(lang) {
			return (locale = lang || locale);
		},

		table(lang) {
			return tree[lang];
		},

		t(key, params, lang) {
			var val = dlv__WEBPACK_IMPORTED_MODULE_0__(tree[lang || locale], key, '');
			if (typeof val === 'function') return val(params);
			if (typeof val === 'string') return (0,templite__WEBPACK_IMPORTED_MODULE_1__.default)(val, params);
			return val;
		}
	};
}


/***/ }),
/* 2 */
/***/ (function(module) {

!function(t,n){ true?module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}:0}(this);
//# sourceMappingURL=dlv.umd.js.map


/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const RGX = /{{(.*?)}}/g;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(str, mix) {
	return str.replace(RGX, (x, key, y) => {
		x = 0;
		y = mix;
		key = key.trim().split('.');
		while (y && x < key.length) {
			y = y[key[x++]];
		}
		return y != null ? y : '';
	});
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rosetta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const i18n = (0,rosetta__WEBPACK_IMPORTED_MODULE_0__.default)({
  en: {
    hello: "Hello {{name}}!",
    nested: {
      key: "Key read from nested object",
    },
  },
});

i18n.locale("en");

const header = document.createElement("div");

header.innerHTML = `<h1>${i18n.t("hello", { name: "Marcin" })}</h1><p>${i18n.t(
  "nested.key"
)}</p>`;

document.body.appendChild(header);

})();

/******/ })()
;