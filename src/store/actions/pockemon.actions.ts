import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { baseSpriteUrl, baseurl, getPockemons } from '../../screens/pockemons/pockemons.service';
import { PockemonActionTypes, PockemonResult, PockemonTypes } from './pockemon.types';

export function loadPockemons(pageUrl?: string) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const pockemonsResult = await getPockemons(pageUrl);
    pockemonsResult.results.forEach(pockemon => {
      let sprite = pockemon.url.replace(baseurl, baseSpriteUrl);
      sprite = sprite.slice(0, -1);
      pockemon.sprite = `${sprite}.png`;
    });

    dispatch(loadPockemonsSuccess(pockemonsResult));
  };
}

function loadPockemonsSuccess(payload: PockemonResult): PockemonActionTypes {
  return {
    type: PockemonTypes.LOAD_POCKEMONS_SUCCESS,
    payload
  };
}
