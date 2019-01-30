const http = require('http');
const url = require('url'); 
const pluralize = require('pluralize'); // npm install pluralize

const port = 3000;
let output = '<h1>HEADING</h1><h2>Subtitle</h2>';
const server = http.createServer(( request, response ) => {

    let parts = url.parse( request.url, true );
    // console.log( parts );
    let query = parts.query;
    console.log( query.word );

    response.statusCode = 200;
    response.setHeader( 'Content-Type', 'text/html' );

    if ( query.word ){
        response.write("<h1>Plural of " + query.word + " is:</h1>");
        response.write(pluralize(query.word));
    }
    response.end();
});
server.listen( port, () => {
    console.log(`Server running at port: ${port}`);
});