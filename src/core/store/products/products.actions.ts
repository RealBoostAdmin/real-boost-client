import { IProducts } from './products.model';

export const PATCH_PRODUCTS_STATE = 'PATCH_PRODUCTS_STATE';

export const PatchProductsState = (productsState: Partial<IProducts>) => ({
  type: PATCH_PRODUCTS_STATE,
  productsState,
});