// set up Mysql conncetion.
const mysql = require("mysql");
const connection=mysql.createConnection({
    host: "localhost",
    port: 5000,
    user: "root",
    password: "",
    database: "burger_db"
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting: "+err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadId);
});
//Export connection for our ORM to use.
module.exports=connection;