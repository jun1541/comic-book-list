
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '14721472',
  database: 'comicbook',
  port: '3306',
});


connection.connect();

// Insert 쿼리문 사용
connection.query('insert into books (genre, name, writer, releasedate) values (\'fantasy\', \'LUMINE\', \'Emma Krogell\', \'2015-05-15\'), (\'comedy\', \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\'), (\'romance\', \'I Love Yoo\', \'Quimchee\', \'2016-08-21\'), (\'action\', \'Tower of God\', \'SIU\', \'2017-10-01\'), (\'action\', \'Rise from Ashes\', \'Madeleine Rosca\', \'2016-01-13\');', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});


connection.end();
