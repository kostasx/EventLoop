// CREATE A NODE.JS APP THAT RUNS WITH 2 NUMBER ARGUMENTS
// AND RETURNS THE SQUARE SPACE

// > node getArea 45 30
// The area is 1350 sq meters

// > node getArea 33
// Command needs 2 arguments
// typeof val === "undefined", typeof val === "string", typeof val == "number"
// process.argv
// parseInt( STRING, 10 ) or Number( STRING ) // node getArea 40a 50 won't work

let arguments = process.argv;
let width = arguments[2];
let height = arguments[3];

width = parseInt( width, 10 );
height = parseInt( height, 10 );

// Number.isNaN( NaN );

// width = parseInt( width, 10 );
// width.toString();

// Number( "40a" );
if ( !isNaN( width ) && !isNaN( height ) ){
    // Get Area
}

if ( !width || !height ){
    console.log( "You must enter a width and a height" );
    return false;
}

console.log( `The area is: ${width * height}` );