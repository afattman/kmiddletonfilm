var mysql = require('mysql');

var con = mysql.createConnection({
    host: '142.93.73.235',
    user: 'root',
    password: '47435681Mo;404',
    database: 'ksitedb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});