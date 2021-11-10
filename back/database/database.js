const mysql = require('mysql');
const data = require('./datosDB.json');

const objConnection = {
    host: data.mysql.host,
    port: data.mysql.port,
    user: data.mysql.user,
    pass: data.mysql.pass,
    database: data.mysql.database
}

const mysqlConnection = mysql.createConnection(objConnection);

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;