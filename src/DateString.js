/**
 * Created by narendrasisodiya on 12/01/16.
 */

let monthList = [{}, {
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

let dayList = [{
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
var validDates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
	'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
	'21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
	'31'
];
class DateString {
	constructor(str) {
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

	getDayFullName() {
		return dayList[this.getDayIndex()].full;
	}

	getDayShortName() {
		return dayList[this.getDayIndex()].short;
	}

	getDayIndex() {
		return new Date(this.getYear(), this.getMonth() - 1, this.getDate()).getDay();
	}


	getMonthName() {
		return monthList[this.getMonth()].full;
	}

	getMonthShortName() {
		return monthList[this.getMonth()].short;
	}

	clone() {
		return new DateString(this.val());
	}

	add(n) {
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

	takeItToFirstDayOfCurrentMonth() {
		this.d = '01';
		return this;
	}

	takeItToFirstDayOfCurrentYear() {
		this.m = '01';
		this.d = '01';
		return this;
	}

	takeItToLastDayOfCurrentYear() {
		this.m = '12';
		this.d = '31';
		return this;
	}

	takeItToFirstDayOfNextMonth() {
		this.d = '01';
		if (this.getMonth() + 1 === 13) {
			this.y = this.getYear() + 1;
			this.m = '01';
		} else {
			this.m = [undefined, '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][this.getMonth() + 1];
		}
		return this;
	}

	takeItToFirstDayOfPrevMonth() {
		this.d = '01';
		if (this.getMonth() - 1 === 0) {
			this.y = this.getYear() - 1;
			this.m = '12';
		} else {
			this.m = [undefined, '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][this.getMonth() - 1];
		}
		return this;
	}

}


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