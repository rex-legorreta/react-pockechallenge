import './App.css';

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from '../../store';
import PockemonsScreen from '../pockemons';

const store = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <PockemonsScreen />
          </Route>
          <Route path="/details">
            <div>details</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
