import { IStore } from '../store.model';

export const ProductsItems = (store: IStore) => store.products?.items || [];
