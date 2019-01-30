const http = require('http');

let server = http.createServer(handle);

function handle(req,res){
    res.end("Hello World!");
}

server.listen(8080);

const { exec } = require('child_process');
server.on('connection', ()=> {

    // The `say` command works only on Mac :(
    exec(`say "new connection on our server!"`);

});