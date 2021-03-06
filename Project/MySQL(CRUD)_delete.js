
const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14721472',
  database: 'comicbook',
  port: '3306',
});

const app = express();
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(3000, () => {
  console.log('Server is running port 3000!');

  connection.connect();
});


app.get('/', (request, response) => {
  fs.readFile('bookList.html', 'utf-8', (error, data) => {
    // Select 쿼리문 사용
    connection.query('SELECT * from books', (error, results, fields) => {
      if (error) throw error;
      response.send(ejs.render(data, {
        data: results,
      }));
    });
  });
});

// 데이터 삭제
app.get('/delete/:id', (request, response) => {
  connection.query('DELETE FROM books where number=?', [request.params.id], () => {
    // 조회 페이지로 이동
    response.redirect('/');
  });
});
