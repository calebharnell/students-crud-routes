import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Index from './components/Index';
import New from './components/New'

class App extends Component {
  state = {
    students: [
      {
        id: 1,
        name: 'Johnny',
        imageURL: 'https://randomuser.me/api/portraits/men/63.jpg',
        bio: 'I am a banana'
      },
      {
        id: 2,
        name: 'Jane',
        imageURL: 'https://randomuser.me/api/portraits/women/93.jpg',
        bio: 'My spoon is too big'
      },
      {
        id: 3,
        name: 'Jimbo',
        imageURL: 'https://randomuser.me/api/portraits/men/23.jpg',
        bio: 'Heyoooo'
      }
    ]
  }

  addStudent = (student) => {
    const newStudentList = [student, ...this.state.students]
    this.setState({
      students: newStudentList
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/new">New</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={() => <Index students={this.state.students} />} />
            <Route path="/new" component={() => <New addStudent={this.addStudent}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
