const path = require( "path" );

let arguments = process.argv;
let fileArg = arguments[2];

console.log( path.parse( fileArg ) );