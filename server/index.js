const express = require('express')
const app = express();
const port = 3000;
var path = require('path');
var bodyParser = require('body-parser');
const Controller = require('./Controller.js');
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/movies', (req, res) => {
  Controller.getMovies(req,res);
});

app.get('/movies/watched', (req, res) => {
  Controller.getWatched(req,res);
});

app.get('/movies/unwatched', (req, res) => {
  Controller.getUnwatched(req,res);
});

app.post('/movies', (req, res) => {
  console.log('post hit')
  Controller.addMovies(req,res);
})

app.put('/movies', (req, res) => {
  console.log('put hit');
  Controller.updateWatchState(req, res);
})
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
