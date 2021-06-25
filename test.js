var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "challenge",
  password: "ChaLLenge+0101",
  database: 'challenge',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log(con.query('SELECT * FROM students'))