const mysql = require('mysql');
const conectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mundialdb'
}
const con = mysql.createConnection(conectionOptions);
console.log('polaczone');
module.exports = con;