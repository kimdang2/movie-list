// interacts with database
var db = require('../database/index.js');

const getMovies = (search, callback) => {
  const q = `select * from movieTable WHERE title LIKE "%${search}%"`;
  db.query(q, callback);
}

const getWatched = (callback) => {
  const q = `SELECT * FROM movieTable WHERE watched = true`;
  db.query(q, callback);
}

const getUnwatched = (callback) => {
  const q = `SELECT * FROM movieTable WHERE watched = false`;
  db.query(q, callback);
}

const addMovies = (params, callback) => {
  console.log('model hit')
  const q = `INSERT INTO movieTable (title, watched) VALUES (?,?)`;
  db.query(q, params, callback);
}

const updateWatchState = (params, callback) => {
  console.log('model hit')
  const id = params[0];
  const watched = params[1];
  const converted = !watched;
  const q = `update movieTable SET watched=${converted} WHERE id=${id}`;
  // console.log(q);
  db.query(q, params, callback);
}

module.exports = {getMovies, getWatched, getUnwatched, addMovies,updateWatchState};