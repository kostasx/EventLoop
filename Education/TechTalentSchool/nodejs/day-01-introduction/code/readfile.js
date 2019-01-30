const fs = require( "fs" );

// SYNC:
let file = fs.readFileSync( "./app.js", "utf8" );   // Will return Buffer object
console.log( "typeof:", typeof file, "\nfile contents:\n", file );


// SYNC WITH ERROR HANDLING:
/*
let file = fs.readFileSync( "./app.js" );   // Will return Buffer object
try {
    let file = fs.readFileSync( "./app.js", "utf8" );   // Will return Buffer object
    console.log( "typeof:", typeof file, "\nfile contents:\n", file );
} catch( e ) {
    console.log( e.message );
}
*/


// ASYNC:
/*
function handler( err, buffer ){

    if ( err ){
        console.log( "Error: ", err.message );        
        return false;
    } else {
        console.log( buffer.toString() );
    }

};

fs.readFile( "./app.js",  handler );
*/