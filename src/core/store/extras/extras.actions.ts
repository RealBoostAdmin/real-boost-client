import {IExtras} from './extras.model';

export const GET_EXTRAS_ITEMS = 'GET_EXTRAS_ITEMS';
export const PATCH_EXTRAS_STATE = 'PATCH_EXTRAS_STATE';

export const GetExtrasItems = () => ({
  type: GET_EXTRAS_ITEMS,
});

export const PatchExtrasState = (extrasState: Partial<IExtras>) => ({
  type: PATCH_EXTRAS_STATE,
  extrasState,
});
