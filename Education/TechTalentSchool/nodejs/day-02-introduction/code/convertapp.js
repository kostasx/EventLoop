const pluralize = require('pluralize');
const convert = require('convert-units');

let MB = convert(4096).from('Kb').to('Mb'); // 1024 -> 1
// let output = MB + " " + pluralize( 'megabyte', MB );
// output = `text ${ ... } text`
// console.log( output );
// Exercise: the app accepts one argument, temperature, and return Fahreneit to Celsius 
let args = process.argv;
let temp = args[2];
temp = convert( temp ).from('F').to('C'); 
console.log(temp.toFixed());
