const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db420.mysql.database.azure.com',
    user: 'grupo420',
    port: 3306,
    password: 'CalderonFaijoWallace420',
    database: 'pp420',
});

module.exports = connection;


