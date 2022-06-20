import { IGames } from './games.model';

export const GET_GAMES_ITEMS = 'GET_GAMES_ITEMS';
export const PATCH_GAMES_STATE = 'PATCH_GAMES_STATE';

export const GetGamesItems = () => ({
  type: GET_GAMES_ITEMS,
});

export const PatchGamesState = (gamesState: Partial<IGames>) => ({
  type: PATCH_GAMES_STATE,
  gamesState,
});
