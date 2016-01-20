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
				full: 'January',
				short: 'Jan'
			}, {
				full: 'February',
				short: 'Feb'
			}, {
				full: 'March',
				short: 'Mar'
			}, {
				full: 'April',
				short: 'Apr'
			}, {
				full: 'May',
				short: 'May'
			}, {
				full: 'June',
				short: 'Jun'
			}, {
				full: 'July',
				short: 'Jul'
			}, {
				full: 'August',
				short: 'Aug'
			}, {
				full: 'September',
				short: 'Sep'
			}, {
				full: 'October',
				short: 'Oct'
			}, {
				full: 'November',
				short: 'Nov'
			}, {
				full: 'December',
				short: 'Dec'
			}];

			var dayList = [{
				full: 'Sunday',
				mid: 'Sun',
				short: 'Su'
			}, {
				full: 'Monday',
				mid: 'Mon',
				short: 'Mo'
			}, {
				full: 'Tuesday',
				mid: 'Tue',
				short: 'Tu'
			}, {
				full: 'Wednesday',
				mid: 'Wed',
				short: 'We'
			}, {
				full: 'Thursday',
				mid: 'Thu',
				short: 'Th'
			}, {
				full: 'Friday',
				mid: 'Fri',
				short: 'Fr'
			}, {
				full: 'Saturday',
				mid: 'Sat',
				short: 'Sa'
			}];

			var validMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
			var validDates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
				'17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

			var DateString = function () {
				function DateString(str) {
					_classCallCheck(this, DateString);

					if (DateString.validate(str)) {
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
					} else {
						console.error("Invalid DateString");
					}
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
				}, {
					key: 'getDayFullName',
					value: function getDayFullName() {
						return dayList[this.getDayIndex()].full;
					}
				}, {
					key: 'getDayShortName',
					value: function getDayShortName() {
						return dayList[this.getDayIndex()].short;
					}
				}, {
					key: 'getDayIndex',
					value: function getDayIndex() {
						return new Date(this.getYear(), this.getMonth() - 1, this.getDate()).getDay();
					}
				}, {
					key: 'getMonthName',
					value: function getMonthName() {
						return monthList[this.getMonth()].full;
					}
				}, {
					key: 'getMonthShortName',
					value: function getMonthShortName() {
						return monthList[this.getMonth()].short;
					}
				}, {
					key: 'clone',
					value: function clone() {
						return new DateString(this.val());
					}
				}, {
					key: 'add',
					value: function add(n) {
						//if (not int){
						//	throw 'Error, argument provided on add() function is not a integer.';
						//}

						var d = new Date(this.getYear(), this.getMonth() - 1, this.getDate());
						var startTimeStamp = d.getTime();
						var newTimeStamp = startTimeStamp + n * 24 * 3600000;
						var p = new Date(newTimeStamp);
						this.y = p.getFullYear() + "";
						this.m = validMonths[p.getMonth()];
						var c = validDates.slice(0);
						c.unshift('');
						this.d = c[p.getDate()];
						return this;
					}
				}, {
					key: 'takeItToFirstDayOfCurrentMonth',
					value: function takeItToFirstDayOfCurrentMonth() {
						this.d = '01';
						return this;
					}
				}, {
					key: 'takeItToFirstDayOfCurrentYear',
					value: function takeItToFirstDayOfCurrentYear() {
						this.m = '01';
						this.d = '01';
						return this;
					}
				}, {
					key: 'takeItToLastDayOfCurrentYear',
					value: function takeItToLastDayOfCurrentYear() {
						this.m = '12';
						this.d = '31';
						return this;
					}
				}, {
					key: 'takeItToFirstDayOfNextMonth',
					value: function takeItToFirstDayOfNextMonth() {
						this.d = '01';
						if (this.getMonth() + 1 === 13) {
							this.y = this.getYear() + 1;
							this.m = '01';
						} else {
							this.m =
									[undefined, '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][this.getMonth() +
									1];
						}
						return this;
					}
				}, {
					key: 'takeItToFirstDayOfPrevMonth',
					value: function takeItToFirstDayOfPrevMonth() {
						this.d = '01';
						if (this.getMonth() - 1 === 0) {
							this.y = this.getYear() - 1;
							this.m = '12';
						} else {
							this.m =
									[undefined, '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][this.getMonth() -
									1];
						}
						return this;
					}
				}]);

				return DateString;
			}();

			DateString.validate = function (str) {
				if (typeof str !== 'string') {
					console.error('Error: DateString must be string. Ex - 2015-09-20');
					return false;
				} else if (str.split('-').length !== 3) {
					return false;
					console.error('Error: DateString must have two 2 dashs. Ex - 2015-09-20');
				} else if (validMonths.indexOf(str.split('-')[1]) === -1) {
					return false;
					console.error('Error: DateString month is not valid. use ' + validMonths);
				} else if (validDates.indexOf(str.split('-')[2]) === -1) {
					return false;
					console.error('Error: DateString date is not valid. use ' + validDates);
		}
				return true;
			};

			module.exports = DateString;

			/***/
		}
		/******/])
});
;