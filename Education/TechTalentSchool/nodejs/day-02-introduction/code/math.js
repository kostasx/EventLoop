// console.log("Node.JS Day 2");
const addsub = require('./addsub');
const multiply = require('./multiply');
// console.log( multiply );
let args = process.argv;
let numA = args[2];
let numB = args[3];
numA = parseInt( numA );
numB = parseInt( numB );
let product = multiply( numA, numB );
// console.log( `${numA} * ${numB} == ${product}` );
let sum = addsub.add(numA, numB);
console.log(`${numA} + ${numB} = ${sum}`);

// Exercise:
// App must contain a third argument to select between addition, subtraction and multiplication
// Usage:
// node math.js add 3 4
// node math.js subtract 5 6
// node math.hs multiply 9 2