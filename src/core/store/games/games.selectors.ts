import { IStore } from '../store.model';
import {IGame} from '../../models/game.model';

export const GamesItems = (store: IStore) => store.games?.items || [];
export const GameSelected = (state: any, gameName: any) => state.games.items.find((game: IGame) => game.name.toLowerCase() === gameName.toLowerCase());

