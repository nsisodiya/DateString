/**
 * Created by narendrasisodiya on 12/01/16.
 */


import DateString from 'datestring';

var d1 = new DateString('2016-01-01');
console.log('var d1 = new DateString(\'2016-01-01\');');
console.log('d1', d1);
console.log('JSON.stringify(d1)', JSON.stringify(d1));
window.d1 = d1;