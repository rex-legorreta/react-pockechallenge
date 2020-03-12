import axios from 'axios';

import { PockemonResult, PokemonDetails } from './../../store/actions/pockemon.types';

export const baseurl = "https://pokeapi.co/api/v2/pokemon/";
export const baseSpriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const getPockemons = (pageurl?: string): Promise<PockemonResult> => {
  return axios.get(pageurl ? pageurl : baseurl).then(res => res.data);
};

export const getSelectedPockemon = (
  pokemonId: number
): Promise<PokemonDetails> => {
  return axios.get(`${baseurl}${pokemonId}`).then(res => res.data);
};
