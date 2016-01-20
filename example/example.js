/**
 * Created by narendrasisodiya on 12/01/16.
 */


import DateString from 'datestring';

var str = '2016-01-01';
var d1 = new DateString(str);
console.log('var d1 = new DateString(\'' + str + '\');');
console.log('d1', d1);
console.log('JSON.stringify(d1)', JSON.stringify(d1));
window.d1 = d1;
console.log('Day on ', str, d1.getDayFullName());
console.log('Day on', str, d1.getDayShortName());
console.log('Month on', str, d1.getMonthName());
console.log('Month on', str, d1.getMonthShortName());
console.log('d1.add(2)', str, d1.add(2).val());
