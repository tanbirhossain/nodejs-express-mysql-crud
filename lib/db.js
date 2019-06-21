var mysql = require("mysql");
var connection =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456789",
    database:"nodejs_crud"
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log("Connected");
    }
});

module.exports=connection;