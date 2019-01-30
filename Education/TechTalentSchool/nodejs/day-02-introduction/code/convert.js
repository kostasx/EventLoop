const convert = require('convert-units');

// Days to Hours
let result = convert(1).from('d').to('h');
console.log( result );
// Week(s) to Days
result = convert(1).from('week').to('d');
console.log( result );
// Kilobytes to MBytes
result = convert(1024).from('Kb').to('Mb');
console.log( result );