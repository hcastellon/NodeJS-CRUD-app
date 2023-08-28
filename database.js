var mysql = require('mysql2');
require('dotenv').config();
var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connection to the database has been successfully established!");
});

module.exports = conn;