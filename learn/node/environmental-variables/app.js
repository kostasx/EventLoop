const express = require("express");
const app = express();
const dotenv = require('dotenv');

const environment = process.env.NODE_ENV

// dotenv.config();    // <-- By default reads the .env file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log({ 
    ENV: process.env.NODE_ENV,
    API: process.env.API, 
    PORT: process.env.PORT 
});

app.get("/", (req,res)=>{ 

    const request = require('request');

    request( process.env.API, function (error, response, body) {
        return res.json( JSON.parse(body) );
    });
});

app.listen( process.env.PORT || 3000 );