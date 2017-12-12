import React, { Component } from 'react';
import Student from './Student';

class Index extends Component {
  render() {
    const {students} = this.props
    return (
      <div>
      {students.map((student) => <Student key={student.id} {...student}/>)}
      </div>
    );
  }
}

export default Index;
