/**
 * Created by narendrasisodiya on 12/01/16.
 */

let monthList = [{}, {
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

class DateString {
	constructor(str) {
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

	toString() {
		return this.val();
	}

	toJSON() {
		return this.val();
	}

	valueOf() {
		return this.val();
	}

	val() {
		return this.y + '-' + this.m + '-' + this.d;
	}

	getYear() {
		return parseInt(this.y);
	}

	getMonth() {
		return parseInt(this.m);
	}

	getDate() {
		return parseInt(this.d);
	}

	getYearStr() {
		return this.y;
	}

	getMonthStr() {
		return this.m;
	}

	getDateStr() {
		return this.d;
	}

}


DateString.validateStr = function () {

};


module.exports = DateString;