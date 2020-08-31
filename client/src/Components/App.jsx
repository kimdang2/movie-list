import React from 'react';
import movies from '../data/movies.js'; // movies
import MovieTable from './MovieTable.jsx';
import SearchBar from './SearchBar.jsx'
import AddMovies from './AddMovies.jsx';

import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
    this.getMovies = this.getMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.filterWatch = this.filterWatch.bind(this);
    this.filterUnwatch = this.filterUnwatch.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.updateWatchState = this.updateWatchState.bind(this);
  }

  componentDidMount(){
    this.getMovies();
  }

  getMovies(){
    // search for a title
    $.get("/movies")
      .done((results) => {
        this.setState({
          movieList: results
        });
      })
      .fail(() => {
        console.log('GET failed');
      })
  }

  //post request
  addMovies(item){
    console.log('item', item)
    $.ajax({
      type: "POST",
      url: '/movies',
      data: item,
      success: this.getMovies(),
    });
  }

  searchMovies(item){
    $.get(`/movies/?title=${item}`)
    .done((results) => {
      if (results.length !== 0){
        this.setState({
          movieList: results
        });
      } else {
        alert("No matches");
      }
    })
    .fail(() => {
      alert('GET search failed');
    })
  }

  filterWatch(){
    $.get('/movies/watched')
      .done((watchedMovies) => {
        this.setState({
          movieList: watchedMovies
        })
      })
  }

  filterUnwatch(){
    $.get('/movies/unwatched')
      .done((unwatchMovies) => {
        this.setState({
          movieList: unwatchMovies
        })
      })
  }

  updateWatchState(data){
    // watch state, id
    console.log('updated watch state data', data) // array
    $.ajax({
      type: 'PUT',
      url: '/movies',
      data: data,
      success: () => {this.getMovies()},
      error: () => console.log('put error')
    })
  }

  render(){
    const searchBar = <div><SearchBar searchMovies={this.searchMovies}/></div>
    const addMovieBar = <div><AddMovies addMovies={this.addMovies}/></div>

    const showAllMovies = <button onClick={this.getMovies} className="btn">Show All</button>
    const watchBtn = <button onClick={this.filterWatch} className="btn">Watch</button>
    const unwatchBtn = <button onClick={this.filterUnwatch} className="btn">Not Watch</button>
    return(
      <div>
        {searchBar}
        {addMovieBar}
        {showAllMovies}
        {watchBtn}
        {unwatchBtn}
        <MovieTable movies={this.state.movieList} updateWatchState={this.updateWatchState}/>
      </div>
    )
  }
}

export default App;