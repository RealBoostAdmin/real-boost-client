import {IOptions} from './options.model';

export const GET_OPTIONS_ITEMS = 'GET_OPTIONS_ITEMS';
export const PATCH_OPTIONS_STATE = 'PATCH_OPTIONS_STATE';

export const GetOptionsItems = () => ({
  type: GET_OPTIONS_ITEMS,
});

export const PatchOptionsState = (optionsState: Partial<IOptions>) => ({
  type: PATCH_OPTIONS_STATE,
  optionsState,
});
