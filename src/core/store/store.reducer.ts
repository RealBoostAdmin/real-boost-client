import ProductsReducer from './products/products.reducer';
import { AnyAction, combineReducers } from 'redux';
import GamesReducer from './games/games.reducer';
import AuthReducer from './auth/games.reducer';
import * as actions from './store.actions';
import storeDefault from './store.default';
import { IStore } from './store.model';
import OptionsReducer from './options/options.reducer';
import ExtrasReducer from './extras/extras.reducer';

const reducers = combineReducers<IStore>({
  auth: AuthReducer,
  games: GamesReducer,
  products: ProductsReducer,
  options: OptionsReducer,
  extras: ExtrasReducer,
});

const StoreReducer = (state: IStore = storeDefault, action: AnyAction): IStore => {
  switch (action.type) {
    case actions.RESET_STORE: {
      return reducers(storeDefault, action);
    }
    case actions.LOGOUT: {
      return reducers({...storeDefault}, action);
    }
    default: {
      return reducers(state, action);
    }
  }
};

export default StoreReducer;
