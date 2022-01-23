import * as actions from './auth.actions';
import authDefault from './auth.default';
import { IAuth } from './auth.model';
import { AnyAction } from 'redux';

const AuthReducer = (state: IAuth = authDefault, action: AnyAction): IAuth => {
  switch (action.type) {
    case actions.PATCH_AUTH_STATE: {
      const {authState} = action;
      return {...state, ...authState};
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;