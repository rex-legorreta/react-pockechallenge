import { combineReducers } from 'redux';

import { PockemonState } from './../actions/pockemon.types';
import { pockemonReducer } from './pockemons.reducers';

export interface RootState {
  pockemons: PockemonState;
}

const appReducers = combineReducers({
  pockemons: pockemonReducer
});

export const rootReducer = (state: any, action: any) => {
  return appReducers(state, action);
};
