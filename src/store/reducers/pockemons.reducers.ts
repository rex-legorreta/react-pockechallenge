import { PockemonActionTypes, PockemonState, PockemonTypes } from '../actions/pockemon.types';

const initialState: PockemonState = {
  loading: false,
  pockemonsData: { results: [] }
};

export function pockemonReducer(
  state = initialState,
  action: PockemonActionTypes
): PockemonState {
  switch (action.type) {
    case PockemonTypes.LOAD_POCKEMONS_SUCCESS:
      return Object.assign({}, state, {
        pockemonsData: action.payload
      });
    default:
      return state;
  }
}
