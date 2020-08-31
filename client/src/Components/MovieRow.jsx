import React from 'react';

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isWatch: false
    // }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e){
    e.preventDefault();
    const idNumber = e.target.id;
    // var watchValue = this.state.isWatch;
    // if (e.target.value === 1){ // true
    //   this.setState({
    //     isWatch: true
    //   });
    //   console.log('isWatch is true', this.state.isWatch)
    //   watchValue = this.state.isWatch;
    // } else if (e.target.value === 0) { // false
    //   watchValue = this.state.isWatch;
    //   console.log('isWatch is false', this.state.isWatch)
    // }

    this.props.updateWatchState({id:idNumber, watched: e.target.value});
  }

  render(){
    const movieTitle = this.props.movie.title;
    const hasWatched = this.props.movie.watched;
    if (hasWatched === 1) {
      var watched = <div>{movieTitle} <button className="btn-watch" onClick={this.handleClick} id={this.props.movie.id} value={this.props.movie.watched}>Watch</button></div>
    } else {
      var watched = <div>{movieTitle} <button className="btn-unwatch" onClick={this.handleClick} id={this.props.movie.id} value={this.props.movie.watched}>Not Watch</button></div>
    }

    return(
        <tr className="outer-row">
          <td className="row">
            {watched}
          </td>
        </tr>
    )
  }
}

export default MovieRow; //object