import React from 'react';

const Student = ({id, name, bio, imageURL}) => (
      <div>
        <h3>{name}</h3>
        <img src={imageURL} alt="profile" />
        <p>{bio}</p>
      </div>
)

export default Student;
