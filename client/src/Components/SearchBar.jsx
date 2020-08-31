import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e){
    var value = e.target.value;
    this.setState({
      search: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchMovies(this.state.search);
    console.log('search', this.state.search);
  }

  render(){
    return(
      <form>
        <input onChange={this.handleSearch} value={this.state.search}></input>
        <button onClick={this.handleSubmit} className='btn'>{' '}Go!</button>
      </form>
    )
  }
}

export default SearchBar;