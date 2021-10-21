// REFERENCE: https://sequelize.org/master/manual/getting-started.html
const { Sequelize } = require('sequelize'); // <- npm install sequelize pg

// CONNECTION CONFIGURATION
config = {
    host    : "localhost",  
    port    : "5432",       
    dialect: 'postgres'

}
const DB_USER = "postgres";
const DB_NAME = "postgres";
const DB_PASS = "password";

// 1) Using a configuration object:
const sequelize = new Sequelize( DB_NAME, DB_USER, DB_PASS, config );

// 2) Passing a connection URI
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${config.host}:${config.port}/${DB_NAME}`); 

// CLOSE THE CONNECTION
sequelize.close().then(() =>{
    console.log("Connection closed.");
});
