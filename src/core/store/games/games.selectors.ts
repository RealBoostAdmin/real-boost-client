import { IStore } from '../store.model';

export const GamesItems = (store: IStore) => store.games?.items || [];