const path = require("path");

// let file = path.parse( __filename ); // __filename: Current running script
let file = path.parse( "./modules/logger2.js" );

console.log( file.ext );
console.log( file );