const express       = require('express');
const app           = express();
const jwt           = require('jsonwebtoken');
const cookieSession = require('cookie-session'); 
const secret_key    = "CHOOSE_A_STRONGER_UNPREDICTABLE_KEY";

app.use(express.urlencoded({ extended: true })); 

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

app.post("/login", (req,res)=>{
    const { body: { username, password } } = req;
    if ( username === "admin" && password === "1234" ){
        const token = jwt.sign({ username }, secret_key );
        req.session.token = token;
        return res.json({ token });

    } 
    res.send("AUTH FAILED");
});

app.get("/profile", (req,res)=>{
    jwt.verify( req.session.token, secret_key, (err, data)=>{
        if ( err ){
            return res.send("NO ACCESS");
        }
        res.send({ userData: data });
    });
});

app.listen( 3000, err =>{
    if ( err ) { return console.log("Error!"); }
    console.log( "Server running on port 3000");
});
