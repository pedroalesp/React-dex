import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GetPokemon from './pages/GetPokemon';
import Home from './pages/Home';
import Layout from './components/Layout';
import PokemonDetails from './pages/PokemonDetails';
import ErrorAlert from './components/ErrorAlert';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/react-dex' component={Home} />
          <Route exact path='/pokemon' component={GetPokemon} />
          <Route
            exact
            path='/details/:pokemonName/'
            component={PokemonDetails}
          />
          <Route component={ErrorAlert} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
