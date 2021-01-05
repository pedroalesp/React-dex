import React, { useState, useEffect } from 'react';

import '../assets/styles/GetPokemon.css';

import PokemonList from '../components/PokemonList';
import Loader from '../components/Loader';
import noFound from '../assets/static/pikachu.png';

const GetPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const arr = [];
  const API = 'https://pokeapi.co/api/v2/pokemon/';
  const limit = '?limit=151';

  useEffect(() => {
    Promise.all([
      fetch(`${API}${limit}`)
        .then((res) => res.json())
        .then((data) =>
          setPokemon(
            data.results.map(async (item) => {
              try {
                const response = await fetch(item.url);
                const poke = await response.json();

                arr.push(poke);
              } catch (error) {
                console.error('404');
              }
            })
          )
        ),
      // arr.sort((a, b) => {
      //   return a.id - b.id;
      // }),
      setDetails(arr),
    ]);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  const ordenedPokemon = details.sort((a, b) => {
    return a.id - b.id;
  });

  const filteredPokemon = ordenedPokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className='search'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='search__input'
              type='text'
              placeholder='Find your pokemon!'
            />
          </div>
          {filteredPokemon.length === 0 ? (
            <div className=' nofound'>
              <h2>No pokemon were founded</h2>
              <img className='noFound--img' src={noFound} alt='no found' />
            </div>
          ) : (
            <PokemonList pokeList={filteredPokemon} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default GetPokemon;
