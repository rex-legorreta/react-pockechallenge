import './pokemon.list.css';

import React, { FunctionComponent } from 'react';

import { Pockemon } from '../../../store/actions/pockemon.types';
import PokemonCard from './pokemon.card';

interface PokemonListComponentProps {
  pokemons?: Pockemon[];
}

const PokemonList: FunctionComponent<PokemonListComponentProps> = ({
  pokemons
}) => {
  if (!pokemons) {
    return null;
  }
  return (
    <div className="list-container">
      <div className="list-content">
        <h4>POKET CHALLENGE</h4>
        {pokemons.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
        })}
        <h4>By Ricardo Legorreta</h4>
      </div>
    </div>
  );
};

export default PokemonList;
