let message = "Hello from Module";
function log(){
    console.log( message );
}
module.exports.msg = message;
module.exports.log = log;

// module.exports {
//     msg: "Hello from Module",
//     log: function log(){ ...console. }
// }

// console.log( module.exports );

