import React from 'react';

const ShowStudent = ({student}) => {
  return (
    <div>
      <h3>{student.name}</h3>
      <img src={student.imageURL} alt="profile" />
      <p>{student.bio}</p>
    </div>
  )

}

export default ShowStudent;
