import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GetPokemon from './pages/GetPokemon';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={GetPokemon} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
