
import { AnyAction } from 'redux';
import * as actions from './extras.actions';
import {IExtras} from './extras.model';
import extrasDefault from './extras.default';

const ExtrasReducer = (state: IExtras = extrasDefault, action: AnyAction): IExtras => {
  switch (action.type) {
    case actions.PATCH_EXTRAS_STATE: {
      const {extrasState} = action;
      return {...state, ...extrasState};
    }
    default: {
      return state;
    }
  }
};

export default ExtrasReducer;
