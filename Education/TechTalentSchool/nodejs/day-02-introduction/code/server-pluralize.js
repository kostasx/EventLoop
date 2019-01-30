const http = require('http');
const url = require('url'); 
const pluralize = require('pluralize');
function handleRequest( request, response ){
    let parts = url.parse(request.url, true);
    let query = parts.query;
    console.log( query );

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    if ( query.word ){
        response.write("Plural of " + query.word + " is: ");
        response.write(pluralize(query.word));
    }
    response.end();
}
const server = http.createServer( handleRequest );
server.listen( 3000, () => { console.log(`Server running at port: 3000`); });

