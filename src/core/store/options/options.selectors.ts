import { IStore } from '../store.model';

export const OptionsItems = (store: IStore) => store.options?.items || [];
