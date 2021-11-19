const express = require("express");
const app     = express();
const session = require("express-session");

app.use(express.urlencoded({ extended: true })); 

app.use(session({
    saveUninitialized: false,   // Setting this to true will create a session + cookie
    resave: false,
    // secret: "SOME_STRONGER_THAN_THIS_SECRET" || process.env.SECRET_KEY
    secret: require('crypto').randomBytes(64).toString('hex'),
    cookie: {
        maxAge: 1000 * 60 * 60, // 1hr
        sameSite: true
    }
}));

app.post("/login", (req,res)=>{
    const { body: { username, password } } = req;
    // bcrypt.compare?
    if ( username === "admin" && password === "1234" ){
        req.session.uid = "admin";  // Get uid from DB?
        return res.status(200).send({ uid: "admin" });
    }
    res.status(401).end("NO ACCESS");
});

app.get("/profile", (req,res)=>{
    const { uid } = req.session;
    if ( uid ){
        // Get User Data from DB?
        return res.status(200).send("PROFILE");
    }
    res.status(401).send("PROFILE::NO ACCESS");
});

app.get("/logout", (req,res)=>{
    req.session.destroy( err =>{
        if ( err ){
            return res.status(500).send("Error logging out!");
        }
        res.clearCookie('connect.sid'); // The 'sid' from the video will NOT remove the cookie from the browser.
        res.status(200).end();
    })
});

app.listen( 3000, ()=>{
    console.log("Server listening on port 3000");
});