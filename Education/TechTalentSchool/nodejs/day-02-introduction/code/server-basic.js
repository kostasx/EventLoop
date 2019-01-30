// A BASIC HTTP SERVER
const http = require('http');

let server = http.createServer((req,res)=>{

	res.write("Hello World");
	res.end();

});

server.listen( 8080 );

