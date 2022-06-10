import React from 'react';

const Person = ({img,name,description,url}) => {
  return (
    <div>
        <img src={img} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{url}</p>
    </div>
  );
}

export default Person;