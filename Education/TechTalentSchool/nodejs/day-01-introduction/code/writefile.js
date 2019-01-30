const fs = require( "fs" );

// SYNC: 
/*
try {
    fs.writeFileSync( "./path/temp.txt", "SOME DATA" );
} catch ( err ){
    console.log( err.message );
}
*/

// ASYNC:
function writeFileCallback( err ){
    if ( err ){
        console.log( "Error: ", err.message );
        return false;
    }
    console.log( "File written successfully!" );
}

fs.writeFile( "./tempAsync.txt", "SOME ASYNC DATA", writeFileCallback );