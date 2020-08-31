import React from 'react';

class AddMovies extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      title: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var value = e.target.value;
    this.setState({
      title: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addMovies(this.state);
  }

  render(){
    return(
      <form>
        <input onChange={this.handleChange} value={this.state.title}></input>
        <button className="btn" onClick={this.handleSubmit}> Add Movie!</button>
      </form>
    )
  }
}

export default AddMovies;