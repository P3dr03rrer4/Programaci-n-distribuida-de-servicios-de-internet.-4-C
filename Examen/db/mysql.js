const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'HerreraPedro',
    password: '20207848',
    database: 'telematica4c'
});

connection.connect(
    (err) => {
        if(err){
            console.log(err); 
            return;
        }else{
            console.log('BD esta conectada');
        }
    }
);

module.exports = connection;