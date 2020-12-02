import React, { useState, useEffect } from 'react';

import PokemonCards from './PokemonCards';

const GetPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=250')
      .then((res) => res.json())
      .then((data) =>
        setPokemon(
          data.results.map((item) => {
            fetch(item.url)
              .then((res) => res.json())
              .then((list) => arr.push(list));
            setDetails(arr);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        details.map((item) => (
          <PokemonCards
            image={item.sprites.front_default}
            key={item.name}
            name={item.name}
          />
        ))
      )}
    </div>
  );
};

export default GetPokemon;