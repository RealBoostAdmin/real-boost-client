import { IAccount } from 'core/models/account.model';
import { IProfile } from 'core/models/profile.model';

export interface IAuth {
  readonly account: IAccount | undefined;
  readonly profile: IProfile | undefined;
}