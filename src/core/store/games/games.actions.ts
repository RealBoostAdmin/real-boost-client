import { IGames } from './games.model';

export const PATCH_GAMES_STATE = 'PATCH_GAMES_STATE';

export const PatchGamesState = (gamesState: Partial<IGames>) => ({
  type: PATCH_GAMES_STATE,
  gamesState,
});