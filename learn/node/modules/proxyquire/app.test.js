// const getID = require("./lib");
const proxyquire = require("proxyquire");

const getID = proxyquire("./lib", { "uuid" : {
    v4: function(){
        return "same-value-all-the-time"
    }
} });
// same-value-all-the-time
console.log( getID() );
console.log( getID() );