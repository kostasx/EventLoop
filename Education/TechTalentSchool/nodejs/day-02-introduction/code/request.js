// Abstraction: request module -> npm install request
// https://github.com/request/request

const fetch = require('request');

fetch( URL, (error, response, joke )=> {
  console.log( JSON.parse( joke ).value ); 
});