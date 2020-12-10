import React, { useState } from 'react';

import '../assets/styles/PokemonCards.css';

const PokemonCards = ({ name, image }) => {
  const [classOn, setClassOn] = useState(false);

  const handleOver = () => setClassOn(true);

  const handleOut = () => setClassOn(false);

  return (
    <div className='main' onMouseOver={handleOver} onMouseOut={handleOut}>
      <img src={image} alt={name} />
      <div className='main-name'>{name}</div>
      <label className={classOn ? 'detailsOn' : 'detailsOf'}>
        View details
      </label>
    </div>
  );
};

export default PokemonCards;
