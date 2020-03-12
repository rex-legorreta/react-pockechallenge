import './pokemon.details.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { loadSelectedPockemon } from '../../../store/actions/pockemon.actions';
import { PokemonDetails as PokemonDetailsProps } from '../../../store/actions/pockemon.types';
import { RootState } from '../../../store/reducers';

interface DispatchProps {
  getSelectedPokemon: (pokemonId: number) => void;
}

interface OwnProps {
  match: any;
}

interface StateProps {
  pockemon: PokemonDetailsProps | null;
}

type Props = StateProps & OwnProps & DispatchProps;

class PokemonDetails extends PureComponent<Props> {
  public componentDidMount() {
    const { pokemonId } = this.props.match.params;
    this.props.getSelectedPokemon(pokemonId);
  }
  public render() {
    const { pockemon } = this.props;
    if (!pockemon) return null;

    return (
      <div className="details-container">
        <div className="details-content">
          <h4>STATS</h4>
          <div className="pokemon-details">
            <img
              src={pockemon.sprites.front_default}
              alt="sprite"
              width="150px"
            />
            <div className="stats">
              <h2>{pockemon.name}</h2>
              <p>⚡ EXPERIENCE {pockemon.base_experience}</p>
              <div className="stats-grid">
                <span>
                  {pockemon.weight}kg
                  <p>Weight</p>
                </span>
                <hr />
                <span>
                  {pockemon.height}m<p>Height</p>
                </span>
              </div>
              <hr />
              <div className="stats-grid">
                <span>
                  🥊 {pockemon.moves.length}
                  <p>TOTAL MOVES</p>
                </span>
                <span>
                  🌟 {pockemon.abilities.length}
                  <p>TOTAL ABILITIES</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => ({
  pockemon: state.pockemons.selectedPokemon
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    getSelectedPokemon: async (pokemonId: number) => {
      await dispatch(loadSelectedPockemon(pokemonId));
    }
  };
};

const enhance: any = compose(
  withRouter,
  connect<StateProps, DispatchProps, OwnProps, any>(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(PokemonDetails);
