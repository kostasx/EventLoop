const os = require( "os" );

// CHECK 3RD ARGUMENT: free OR total
let arguments = process.argv;
let option = arguments[2];

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 };

if ( option === "free" ){

    let freeMem = os.freemem();
    console.log( "Free memory: ", bytesToSize( freeMem ) );

} else if ( option === "total" ) {

    let totalMem = os.totalmem();
    console.log( "Total memory: ", bytesToSize( totalMem ) );

} else {

    console.log( "Error: Command not found." );

}