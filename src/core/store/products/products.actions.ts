import { IProducts } from './products.model';

export const GET_PRODUCTS_ITEMS = 'GET_PRODUCTS_ITEMS';
export const PATCH_PRODUCTS_STATE = 'PATCH_PRODUCTS_STATE';

export const GetProductsItems = (gameId: string) => ({
  type: GET_PRODUCTS_ITEMS,
  gameId
});

export const PatchProductsState = (productsState: Partial<IProducts>) => ({
  type: PATCH_PRODUCTS_STATE,
  productsState,
});
