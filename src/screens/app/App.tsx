import './App.css';

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from '../../store';
import PockemonsScreen from '../pockemons';
import PokemonDetails from '../pockemons/details/pokemon.details';

const store = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <PockemonsScreen />
          </Route>
          <Route
            exact
            path="/details/:pokemonId"
            children={<PokemonDetails />}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
