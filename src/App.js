import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GetPokemon from './pages/GetPokemon';
import Home from './pages/Home';
import Layout from './components/Layout';
import PokemonDetails from './pages/PokemonDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokemon' component={GetPokemon} />
          <Route
            exact
            path='/details/:pokemonName/'
            component={PokemonDetails}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
