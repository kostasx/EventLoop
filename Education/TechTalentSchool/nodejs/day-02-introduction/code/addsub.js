let message = "Add/Subtract.JS Module";

function add(numA,numB){
    return numA + numB;
}
function subtract(numA,numB){
    return numA - numB;
}
module.exports = {
    add: add,
    sub: subtract
}