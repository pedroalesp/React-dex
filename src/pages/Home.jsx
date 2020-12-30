import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Home.css';
import pokeball from '../assets/static/pokeball.png';

const Home = () => (
  <div className='home'>
    <div className='home__titles'>
      <h1>
        React-dex is an app made with React Hooks and React Router, it contains
        a pokedex with the first gen of pokemon
      </h1>
      <h2>
        This is a project with educational purposes, all the resources were
        fetching from the{' '}
        <a className=' text-decoration-none' href='https://pokeapi.co/'>
          Poke Api{' '}
        </a>{' '}
        and{' '}
        <a className=' text-decoration-none' href='https://iconos8.es'>
          Icons8
        </a>
      </h2>
    </div>
    <div className='home__cta'>
      <Link to='/pokemon'>
        <button className='btn btn-primary'>
          <h1>
            <img src={pokeball} alt='pokeball' />
            Find your pokemon!
          </h1>
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
