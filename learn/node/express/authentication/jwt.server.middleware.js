const express  = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secret_key = "CHOOSE_A_STRONGER_UNPREDICTABLE_KEY";
// secret_key = require('crypto').randomBytes(64).toString('hex') || process.env.SECRET_KEY;

app.use(express.urlencoded({ extended: true })); 

app.post("/login", (req,res)=>{
    const { body: { username, password } } = req;
    if ( username === "admin" && password === "1234" ){
        const token = jwt.sign({ username }, secret_key );
        // (2) SEND TOKEN TO CLIENT
        return res.json({ token });
        // CLIENT will send this token to the backend as an authorization header
        // on each subsequent request. The preferred form is:
        // Authorization: Bearer <TOKEN>
    } 
    res.send("AUTH FAILED");
});

function authMiddleware( req, res, next ){
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify( token, secret_key, (err, data)=>{
        if ( err ){
            return res.json({ err });
        }
        req.userData = data;
        // req.locals.userData = data;
        next();
    });
}
app.get("/profile", authMiddleware, (req,res)=>{

    if ( req.userData ){
        return res.json({ userData: req.userData });
    }
    return res.send("NO ACCESS");
});

app.listen( 3000, err =>{
    if ( err ) { return console.log("Error!"); }
    console.log( "Server running on port 3000");
});
