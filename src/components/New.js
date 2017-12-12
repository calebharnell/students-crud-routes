import React, { Component } from 'react';

class New extends Component {
  state = {
    name: '',
    bio: '',
    imageURL: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addStudent({
      name: this.state.name,
      bio: this.state.bio,
      imageURL: this.state.imageURL
    })
    this.setState({
      name: '',
      bio: '',
      imageURL: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add new Student</h1>
        <form onSubmit={this.handleFormSubmit}>
          <p>Name</p>
          <input name="name" value={this.state.name} onChange={this.handleInputChange}/>
          <p>Bio</p>
          <input name="bio" value={this.state.bio} onChange={this.handleInputChange} />
          <p>Image URL</p>
          <input name="imageURL" value={this.state.imageURL} onChange={this.handleInputChange} /><br /><br />
          <button>Submit</button>
        </form>
    </div>
    );
  }
}

export default New;
