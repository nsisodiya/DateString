(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["DateString"] = factory();
	else
		root["DateString"] = factory();
})(this, function () {
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
		/***/ function (module, exports) {

			'use strict';

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			/**
			 * Created by narendrasisodiya on 12/01/16.
			 */

			var monthList = [{}, {
				fullName: 'January',
				shortName: 'Jan'
			}, {
				fullName: 'February',
				shortName: 'Feb'
			}, {
				fullName: 'March',
				shortName: 'Mar'
			}, {
				fullName: 'April',
				shortName: 'Apr'
			}, {
				fullName: 'May',
				shortName: 'May'
			}, {
				fullName: 'June',
				shortName: 'Jun'
			}, {
				fullName: 'July',
				shortName: 'Jul'
			}, {
				fullName: 'August',
				shortName: 'Aug'
			}, {
				fullName: 'September',
				shortName: 'Sep'
			}, {
				fullName: 'October',
				shortName: 'Oct'
			}, {
				fullName: 'November',
				shortName: 'Nov'
			}, {
				fullName: 'December',
				shortName: 'Dec'
			}];

			var DateString = function () {
				function DateString(str) {
					_classCallCheck(this, DateString);

					var p = str.split('-');
					Object.defineProperty(this, 'y', {
						value: p[0],
						enumerable: false,
						configurable: false,
						writable: true
					});
					Object.defineProperty(this, 'm', {
						value: p[1],
						enumerable: false,
						configurable: false,
						writable: true
					});
					Object.defineProperty(this, 'd', {
						value: p[2],
						enumerable: false,
						configurable: false,
						writable: true
					});
		}

				_createClass(DateString, [{
					key: 'toString',
					value: function toString() {
						return this.val();
					}
				}, {
					key: 'toJSON',
					value: function toJSON() {
						return this.val();
					}
				}, {
					key: 'valueOf',
					value: function valueOf() {
						return this.val();
					}
				}, {
					key: 'val',
					value: function val() {
						return this.y + '-' + this.m + '-' + this.d;
					}
				}, {
					key: 'getYear',
					value: function getYear() {
						return parseInt(this.y);
					}
				}, {
					key: 'getMonth',
					value: function getMonth() {
						return parseInt(this.m);
					}
				}, {
					key: 'getDate',
					value: function getDate() {
						return parseInt(this.d);
					}
				}, {
					key: 'getYearStr',
					value: function getYearStr() {
						return this.y;
					}
				}, {
					key: 'getMonthStr',
					value: function getMonthStr() {
						return this.m;
					}
				}, {
					key: 'getDateStr',
					value: function getDateStr() {
						return this.d;
					}
				}]);

				return DateString;
			}();

			DateString.validateStr = function () {
			};

			module.exports = DateString;

			/***/
		}
		/******/])
});
;