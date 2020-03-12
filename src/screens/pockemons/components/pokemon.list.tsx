import './pokemon.list.css';

import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import LeftIcon from '../../../assets/left-icon.png';
import RighttIcon from '../../../assets/right-icon.png';
import { Pockemon } from '../../../store/actions/pockemon.types';
import PokemonCard from './pokemon.card';

interface PokemonListComponentProps {
  pokemons?: Pockemon[];
  goNextPage?: () => void;
  goPreviousPage?: () => void;
}

const PokemonList: FunctionComponent<PokemonListComponentProps> = ({
  pokemons,
  goNextPage,
  goPreviousPage
}) => {
  if (!pokemons) {
    return null;
  }
  return (
    <div className="list-container">
      <div className="list-content">
        <h4>POKET CHALLENGE</h4>
        {pokemons.map(pokemon => {
          return (
            <NavLink to={`/details/${pokemon.id}`} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </NavLink>
          );
        })}
        <br />
        <br />
        <div className="pagination">
          {goPreviousPage && (
            <span onClick={goPreviousPage}>
              <img src={LeftIcon} alt="left-icon" width="20px" />
              Previous
            </span>
          )}
          {goNextPage && (
            <span onClick={goNextPage}>
              Next
              <img src={RighttIcon} alt="right-icon" width="20px" />
            </span>
          )}
        </div>
        <h4>By Ricardo Legorreta</h4>
      </div>
    </div>
  );
};

export default PokemonList;
