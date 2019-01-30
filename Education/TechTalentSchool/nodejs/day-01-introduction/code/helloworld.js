console.log( "Hello World" );

// console.log( global );   // The global object in Node.JS
// global is to Node.JS what window is to JavaScript in the browser
let message = "hello";
console.log( global.message );      // undefined

undeclared = "Ops!";
console.log( global.undeclared );   // Ops!
