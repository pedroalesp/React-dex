import React, { useState } from 'react';

const PokemonInfoImage = ({ name }) => {
  const [count, setCount] = useState(1);

  const pokemonImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/';
  setCount(count + 1);

  return (
    <div>
      <img src={`${pokemonImage}${count}.png`} alt={name} />;
    </div>
  );
};

export default PokemonInfoImage;
