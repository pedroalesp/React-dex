import React from 'react';

import '../assets/styles/PokemonCards.css';

const PokemonCards = ({ name, image }) => {
  return (
    <section className='main'>
      <img src={image} alt={name} />
      <div>{name}</div>
    </section>
  );
};

export default PokemonCards;
