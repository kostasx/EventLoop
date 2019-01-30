const https = require('https');
const URL = 'https://apis.chucknorris.io/jokes/random';
https.get( URL, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
        let result = JSON.parse(data);
        console.log( result.value );
    });

}).on("error", (err) => {

    // console.log("Error:" + err);
    // console.log(`Error: ${err}`);
    console.log("Error:", err);
    // console.log(err);

});  