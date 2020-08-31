// interacts with model
const Model = require('./Model.js');

const getMovies = (req,res) => {
  // fetch SPECIFIC title
  const title = req.query.title || ''; // retrieves the searched item or sends all moviesback
  Model.getMovies(title, (err, results) => {
    if(err) {
      res.status(400).send('Error fetching selected titles')
    } else {
      res.status(200).send(results);
    }
  })
}

const getWatched = (req,res) => {
  // fetch ALL watched movies
  Model.getWatched((err, results) => {
    if (err) {
      res.send('Error fetching all watched movies')
    } else {
      res.send(results);
    }
  })
}

const getUnwatched = (req,res) => {
  // fetch ALL watched movies
  Model.getUnwatched((err, results) => {
    if (err) {
      res.send('Error fetching all NOT watched movies')
    } else {
      console.log('unwatched', results);
      res.send(results);
    }
  })
}

const addMovies = (req, res) => {
  console.log('controller to add hit')
  const {title, watched} = req.body;
  Model.addMovies([title,!(Boolean(watched))], (err, results) => {
    if (err) {
      res.status(404).send("Error adding movies")
    } else {
      res.status(201).send("Success adding")
    }
  })
}

// 0 is false
// 1 is true
const updateWatchState = (req, res) => {
  // console.log('controller hit')
  const {id, watched} = req.body
  if (watched === '0') {
    var state = false;
  } else  if (watched === '1'){
    state = true;
  }
  // console.log('watched state is ',state);

  Model.updateWatchState([id, state], (err, results) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(results);
    }
  })
}

module.exports={getMovies, getWatched, getUnwatched, addMovies,updateWatchState};