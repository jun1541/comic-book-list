
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14721472',
  database: 'comicbook',
  port: '3306',
});


connection.connect();


connection.query('delete from books where number = 2 and writer = \'JI\';', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.query('SELECT * from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();
