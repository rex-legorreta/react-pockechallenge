import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { baseSpriteUrl, baseurl, getPockemons, getSelectedPockemon } from '../../screens/pockemons/pockemons.service';
import { PockemonActionTypes, PockemonResult, PockemonTypes, PokemonDetails } from './pockemon.types';

export function loadPockemons(pageUrl?: string) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const pockemonsResult = await getPockemons(pageUrl);
    pockemonsResult.results.forEach(pockemon => {
      let sprite = pockemon.url.replace(baseurl, baseSpriteUrl);
      let id: any = "";
      sprite = sprite.slice(0, -1);
      id = sprite.split("/").pop();
      pockemon.sprite = `${sprite}.png`;
      pockemon.id = parseInt(id);
    });

    dispatch(loadPockemonsSuccess(pockemonsResult));
  };
}

export function loadSelectedPockemon(pokemonId: number) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const pockemonResult = await getSelectedPockemon(pokemonId);

    dispatch(loadSelectedPockemonSuccess(pockemonResult));
  };
}

function loadPockemonsSuccess(payload: PockemonResult): PockemonActionTypes {
  return {
    type: PockemonTypes.LOAD_POCKEMONS_SUCCESS,
    payload
  };
}

function loadSelectedPockemonSuccess(
  payload: PokemonDetails
): PockemonActionTypes {
  return {
    type: PockemonTypes.LOAD_SELECTED_POCKEMON_SUCCESS,
    payload
  };
}
