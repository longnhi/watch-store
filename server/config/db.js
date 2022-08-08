const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbwatchstore',
    multipleStatements: true
});

module.exports = db;