import { IStore } from '../store.model';

export const ExtrasItems = (store: IStore) => store.extras?.items || [];
