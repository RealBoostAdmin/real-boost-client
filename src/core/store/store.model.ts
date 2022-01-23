import { IProducts } from './products/products.model';
import { IGames } from './games/games.model';
import { IAuth } from './auth/auth.model';

export interface IStore {
  readonly products: IProducts | undefined;
  readonly games: IGames | undefined;
  readonly auth: IAuth | undefined;
}