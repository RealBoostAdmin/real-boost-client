import productsDefault from './products.default';
import * as actions from './products.actions';
import { IProducts } from './products.model';
import { AnyAction } from 'redux';

const ProductsReducer = (state: IProducts = productsDefault, action: AnyAction): IProducts => {
  switch (action.type) {
    case actions.PATCH_PRODUCTS_STATE: {
      const {productsState} = action;
      return {...state, ...productsState};
    }
    default: {
      return state;
    }
  }
};

export default ProductsReducer;