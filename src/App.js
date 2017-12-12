import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = [
    {
      id: 1,
      name: 'Johnny',
      imageURL: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: 2,
      name: 'Jane',
      imageURL: 'https://randomuser.me/api/portraits/women/93.jpg'
    },
    {
      id: 3,
      name: 'Jimbo',
      imageURL: 'https://randomuser.me/api/portraits/men/23.jpg'
    }
  ]
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
