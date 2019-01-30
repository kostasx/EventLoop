const https = require( "https" );
const URL   = "https://api.chucknorris.io/jokes/random";
// const URL   = "https://ZZZapi.chucknorris.io/jokes/random"; // Try this to produce an error

function handleResponse( response ){
    let data = "";
    response.on( "data", ( chunk )=> data = data + chunk ); // data += chunk
    response.on( "end", ()=> {
        let joke = JSON.parse( data ); 
        console.log( joke.value );
    });
}

https
.get( URL, handleResponse )
.on( "error", err => console.log( err.message ) );
