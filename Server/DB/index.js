const mysql = require('mysql');


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Sabari781@',
    database: 'hospital',
})

module.exports = db;
