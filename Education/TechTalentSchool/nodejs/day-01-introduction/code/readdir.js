const fs = require( "fs" );

// SYNC:
// let files = fs.readdirSync( "./" ); // Read the current directory contents 
// console.log( files );

// ASYNC:
console.log("Before");

function handler( err, files ){
    if ( err ){
        console.log( err.message );
        return false;
    }
    console.log( files );
}

fs.readdir( "./", handler );
console.log( "After" );