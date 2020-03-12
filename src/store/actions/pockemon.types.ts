export enum PockemonTypes {
  LOAD_POCKEMONS = "LOAD_POCKEMONS",
  LOAD_POCKEMONS_SUCCESS = "LOAD_POCKEMONS_SUCCESS",
  LOAD_SELECTED_POCKEMON_SUCCESS = "LOAD__SELECTED_POCKEMON_SUCCESS"
}

export interface PockemonState {
  pockemonsData: PockemonResult;
  selectedPokemon: PokemonDetails | null;
  loading: boolean;
}

export interface Pockemon {
  name: string;
  url: string;
  sprite: string;
  id: number;
}

export interface PokemonDetails {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: {
    name: "charizard";
    url: "https://pokeapi.co/api/v2/pokemon-species/6/";
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_femaile: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: any[];
  types: any[];
  weight: number;
}

export interface PockemonResult {
  results: Pockemon[];
  /* total number of existing pockemons */
  count?: number;
  /* next pagination url */
  next?: string;
  /* previous pagination url */
  previous?: string;
}

interface LoadPockemons {
  type: PockemonTypes.LOAD_POCKEMONS;
  payload: {
    page: number;
  };
}

interface LoadPockemonsSuccess {
  type: PockemonTypes.LOAD_POCKEMONS_SUCCESS;
  payload: PockemonResult;
}

interface LoadSelectedPockemonSuccess {
  type: PockemonTypes.LOAD_SELECTED_POCKEMON_SUCCESS;
  payload: PokemonDetails;
}

export type PockemonActionTypes =
  | LoadPockemons
  | LoadPockemonsSuccess
  | LoadSelectedPockemonSuccess;
