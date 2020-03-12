import { PockemonActionTypes, PockemonState, PockemonTypes } from '../actions/pockemon.types';

const initialState: PockemonState = {
  loading: false,
  pockemonsData: { results: [] },
  selectedPokemon: null
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

    case PockemonTypes.LOAD_SELECTED_POCKEMON_SUCCESS:
      return Object.assign({}, state, {
        selectedPokemon: action.payload
      });
    default:
      return state;
  }
}
