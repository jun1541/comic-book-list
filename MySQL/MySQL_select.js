
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14721472',
  database: 'comicbook',
  port: '3306',
});

connection.connect();


connection.query('select * from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (각각의 필드 명칭) 사용
connection.query('select number, genre, name, writer, releasedate from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (where문 사용)
connection.query('select * from books where genre = \'action\'', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (where문 사용 - or)
connection.query('select * from books where genre = \'action\' or genre = \'comedy\'', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (like 사용)
connection.query('select * from books where releasedate LIKE \'2017%\'', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (order by)
connection.query('select number, genre, name, writer, releasedate from books order by releasedate;', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 (order by desc)
connection.query('select number, genre, name, writer, releasedate from books order by releasedate desc;', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});


connection.end();
