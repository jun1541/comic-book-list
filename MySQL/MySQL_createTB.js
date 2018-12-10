// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14721472',
  database: 'comicbook',
  port: '3306',
});

// 데이터베이스 연결
connection.connect();

// create 쿼리문 사용
connection.query('create table books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, genre VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, writer VARCHAR(30) NOT NULL, releasedate date NOT NULL);', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.query('describe books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// 연결 종료
connection.end();
