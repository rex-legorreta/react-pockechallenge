import './pokemon.card.css';

import React, { FunctionComponent } from 'react';

import { Pockemon } from '../../../store/actions/pockemon.types';

interface PokemonCardProps {
  pokemon: Pockemon;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
