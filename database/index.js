var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'LifeIsHard123!',
  database : 'moviesDatabase'
});

connection.connect();

module.exports = connection;