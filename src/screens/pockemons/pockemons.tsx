import './pockemons.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { loadPockemons } from '../../store/actions/pockemon.actions';
import { Pockemon } from '../../store/actions/pockemon.types';
import { RootState } from '../../store/reducers';
import PockemonList from './components/pokemon.list';

interface DispatchProps {
  getPockemons: (pageurl?: string) => void;
}

interface OwnProps {}

interface StateProps {
  pockemons: Pockemon[];
  nextPageUrl?: string;
  previousPageurl?: string;
}

type Props = StateProps & OwnProps & DispatchProps;

class PockemonsScreen extends PureComponent<Props> {
  public componentDidMount() {
    this.props.getPockemons();
  }

  public componentWillReceiveProps(newProps: Props) {
    console.log("zzzzzz", newProps);
  }

  public render() {
    return (
      <div className="pokemon-container">
        <PockemonList pokemons={this.props.pockemons} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => ({
  pockemons: state.pockemons.pockemonsData.results
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    getPockemons: async (pageurl?: string) => {
      await dispatch(loadPockemons(pageurl));
    }
  };
};

export default connect<StateProps, DispatchProps, OwnProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PockemonsScreen);
