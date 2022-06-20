import { IProducts } from './products/products.model';
import { IGames } from './games/games.model';
import { IAuth } from './auth/auth.model';
import {IOptions} from './options/options.model';
import {IExtras} from './extras/extras.model';

export interface IStore {
  readonly auth: IAuth | undefined;
  readonly games: IGames | undefined;
  readonly products: IProducts | undefined;
  readonly options: IOptions | undefined;
  readonly extras: IExtras | undefined;
}
