import { IAuth } from './auth.model';

export const PATCH_AUTH_STATE = 'PATCH_AUTH_STATE';

export const PatchAuthState = (authState: Partial<IAuth>) => ({
  type: PATCH_AUTH_STATE,
  authState,
});