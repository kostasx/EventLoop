const express = require("express");
const app = express();
const dotenv = require('dotenv');

const environment = process.env.NODE_ENV
// `environment` will be 'production' for `npm start prod`
//  and 'development' for `npm start dev`

// dotenv.config();    // <-- By default reads the .env file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// Let's see what we get...
console.log({ 
    ENV: process.env.NODE_ENV,
    API: process.env.API, 
    PORT: process.env.PORT 
});

app.get("/", (req,res)=>{ 

    const request = require('request');

    // Get the API URL from the environmental variables and call a different API
    // based on whether we are running on development mode or production mode
    request( process.env.API, function (error, response, body) {
        return res.json( JSON.parse(body) );
    });
});

// Get the server PORT from the environmental variables
app.listen( process.env.PORT || 3000 );