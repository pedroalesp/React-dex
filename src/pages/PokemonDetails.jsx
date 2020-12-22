import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/styles/PokemonDetails.css';

import Loader from '../components/Loader';

const PokemonDetails = (props) => {
  const pokemon = props.match.params.pokemonName;
  const [pokemonInfo, SetPokemonInfo] = useState({
    img: undefined,
    name: undefined,
    type: undefined,
    weight: undefined,
    height: undefined,
    ability: undefined,
  });
  const [loading, setLoading] = useState(true);
  const API = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    fetch(`${API}${pokemon}/`)
      .then((res) => res.json())
      .then((data) =>
        SetPokemonInfo({
          img: data.sprites.front_default,
          name: data.name,
          type: data.types[0].type.name,
          weight: data.weight,
          height: data.height,
          ability: data.abilities[0].ability.name,
        })
      );
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className='details'>
      {loading ? (
        <Loader />
      ) : (
        <div className='details__container'>
          <img className='details__image' src={pokemonInfo.img} alt='front' />
          <div className='details__container--info'>
            <p className='details__container--items'>
              Name: <label>{pokemonInfo.name}</label>
            </p>
            <p className='details__container--items'>
              Type: <label>{pokemonInfo.type}</label>
            </p>
            <p className='details__container--items'>
              Weigth: <label>{pokemonInfo.weight}</label>
            </p>
            <p className='details__container--items'>
              Height: <label>{pokemonInfo.height}</label>
            </p>
            <p className='details__container--items'>
              Ability:<label>{pokemonInfo.ability}</label>{' '}
            </p>
          </div>
          <button className='btn btn-primary'>Go back</button>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
