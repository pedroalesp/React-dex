import React from 'react';

const PokemonCards = ({ name, image }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokemonCards;
