import React from 'react';

import '../assets/styles/PokemonCards.css';

const PokemonCards = ({ name, image }) => {
  return (
    <div className='main'>
      <img src={image} alt={name} />
      <div className='main-name'>{name}</div>
    </div>
  );
};

export default PokemonCards;
