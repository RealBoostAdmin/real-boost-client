
import { AnyAction } from 'redux';
import {IOptions} from './options.model';
import * as actions from './options.actions';
import optionsDefault from './options.default';

const OptionsReducer = (state: IOptions = optionsDefault, action: AnyAction): IOptions => {
  switch (action.type) {
    case actions.PATCH_OPTIONS_STATE: {
      const {optionsState} = action;
      return {...state, ...optionsState};
    }
    default: {
      return state;
    }
  }
};

export default OptionsReducer;
