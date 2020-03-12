export enum PockemonTypes {
  LOAD_POCKEMONS = "LOAD_POCKEMONS",
  LOAD_POCKEMONS_SUCCESS = "LOAD_POCKEMONS_SUCCESS"
}

export interface PockemonState {
  pockemonsData: PockemonResult;
  loading: boolean;
}

export interface Pockemon {
  name: string;
  url: string;
  sprite: string;
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

export type PockemonActionTypes = LoadPockemons | LoadPockemonsSuccess;
