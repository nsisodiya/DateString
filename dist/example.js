(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("datestring"));
	else if (typeof define === 'function' && define.amd)
		define(["DateString"], factory);
	else if (typeof exports === 'object')
		exports["example"] = factory(require("datestring"));
	else
		root["example"] = factory(root["DateString"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/
		var installedModules = {};

		/******/ 	// The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/
			if (installedModules[moduleId])
			/******/      return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/      exports: {},
				/******/      id: moduleId,
				/******/      loaded: false
				/******/
			};

			/******/ 		// Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/([
		/* 0 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _datestring = __webpack_require__(1);

			var _datestring2 = _interopRequireDefault(_datestring);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			var d1 = new _datestring2.default('2016-01-01');
			/**
			 * Created by narendrasisodiya on 12/01/16.
			 */

			console.log('var d1 = new DateString(\'2016-01-01\');');
			console.log('d1', d1);
			console.log('JSON.stringify(d1)', JSON.stringify(d1));
			window.d1 = d1;

			/***/
		},
		/* 1 */
		/***/ function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

			/***/
		}
		/******/])
});
;