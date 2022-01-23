import gamesDefault from './games.default';
import * as actions from './games.actions';
import { IGames } from './games.model';
import { AnyAction } from 'redux';

const GamesReducer = (state: IGames = gamesDefault, action: AnyAction): IGames => {
  switch (action.type) {
    case actions.PATCH_GAMES_STATE: {
      const {gamesState} = action;
      return {...state, ...gamesState};
    }
    default: {
      return state;
    }
  }
};

export default GamesReducer;