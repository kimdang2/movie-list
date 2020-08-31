import React from 'react';
import MovieRow from './MovieRow.jsx';

class MovieTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const row = []; // [<MovieRow movie={movie} key={movie.title}/>]
    this.props.movies.forEach((movie,index) => {
      row.push(<MovieRow movie={movie} key={movie.title} updateWatchState={this.props.updateWatchState}/>)
    })
    return(
      <table className='movieTable'>
        <tbody>{row}</tbody>
      </table>

    )
  }
}

export default MovieTable; // array