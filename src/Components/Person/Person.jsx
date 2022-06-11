import React from 'react';

const Person = ({img,name,description,url}) => {
  return (
    <div>
        <img src={img} />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target="_blank">Biografía o Perfil</a>
    </div>
  );
}

export default Person;