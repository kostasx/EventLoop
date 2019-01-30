//>> DISPLAY A STRING TO THE CONSOLE:
// console.log('Node!');
// console.log( window );


//>> CHECKING CURRENT ENVIRONMENT:
// console.log( "Checking Browser:", typeof window !== "undefined" );
// console.log( "Checking Node.JS:", typeof global !== "undefined" );


//>> THE GLOBAL MODULE OBJECT:
// console.log( module );


//>> THE SPECIAL __filename OBJECT:
// console.log( __filename );


//>> IMPORTING OUR MODULE:
// let logger = require("./logger");
// console.log( logger );
// logger();


//>> Node.JS looks for:
//>> 1) logger.js
//>> 2) logger.json
//>> 3) logger.node


//>> READ JSON DATA: data.json
// let data = require("./data");
// console.log( data.person );


//>> READ DIR SYNCHRONOUSLY 
// const fs = require('fs');
// console.log("Before");
// const files = fs.readdirSync('./');
// console.log( files );
// console.log("After");
// console.log( files[1] );


//>> READ DIR ASYNCHRONOUSLY 
// const fs = require('fs');
// console.log("Before");
// function read(err, dirContents){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log( dirContents );
//     }
// }
// const files = fs.readdir('./', read); 
// console.log("After");


//>> READ FILE SYNCHRONOUSLY
// const fs = require('fs');
// let contents = fs.readFileSync('./companies.txt','utf8');
// if ( contents.indexOf("asshole") > -1 ){
//     console.log("Foul language is not allowed!");
// } else {
//     console.log("Είσαι Κύριος!")
// }
// let contArr = contents.split("\n");
// console.log( contArr.length );


//>> READ FILE ASYNCHRONOUSLY
// const fs = require('fs');
// console.log("Before");
// function displayContent(err, text){
//     text = text.replace("google","evil");
//     console.log(text);
// }
// fs.readFile('./companies.txt', 'utf8', displayContent);
// console.log("After");


//>> THE PATH MODULE
// const path = require('path');
// let p = path.parse(__filename);
// console.log( p );
// console.log( p.ext );


//>> READING COMMAND LINE ARGUMENTS:
// const path = require('path'); 
// let arguments = process.argv;
// let numOne = arguments[2]; 
// let numTwo = arguments[3]; 
// numOne = parseInt(numOne);
// numTwo = parseInt(numTwo);
// console.log( "Result:", numOne + numTwo );
// process.argv == Array of command line arguments
// let pathObj = path.parse( arguments[2] );
// console.log( pathObj );


//>> THE OS MODULE: GET OS MEMORY
// const os = require('os');
// os.totalmem();
// os.freemem(); 
// function bytesToSize(bytes) {
//     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//     if (bytes == 0) return '0 Byte';
//     var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//     return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
//  };
//  let totalMem = os.freemem();
//  totalMem = bytesToSize( totalMem );
// console.log( `Total Memory: ${totalMem}` );
