const express  = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secret_key = "CHOOSE_A_STRONGER_UNPREDICTABLE_KEY";
// secret_key = require('crypto').randomBytes(64).toString('hex') || process.env.SECRET_KEY;

app.use(express.urlencoded({ extended: true })); 

// (1) HANDLE POST REQUEST: Client sends username + password
app.post("/login", (req,res)=>{
    const { body: { username, password } } = req;
    if ( username === "admin" && password === "1234" ){
        const token = jwt.sign({ username }, secret_key );
        // (2) SEND TOKEN TO CLIENT
        return res.json({ token }); // Verify: https://jwt.io/
    } 
    res.send("AUTH FAILED");
});

// (3) ACCESS PROTECTED DATA USING TOKEN IN HEADERS
app.get("/profile", (req,res)=>{
    // (4) VERIFY JWT SIGNATURE + SEND DATA
    const token = req.headers.authorization.split(" ")[1]; // [Bearer, TOKEN][1]
    jwt.verify( token, secret_key, (err, data)=>{
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
