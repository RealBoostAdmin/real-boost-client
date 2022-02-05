import { GET_GAMES_ITEMS, PatchGamesState } from './games.actions';
import { put, takeLatest } from 'redux-saga/effects';
import { supabase } from 'core/supabase';

export function* GetGamesItemsSaga() {
  try {
    const {data} = yield supabase
      .from('games')
      .select('*');

    yield put(PatchGamesState({items: data}));
  } catch (error) {
    console.log(error)
  }
}

export function* GamesWatcher() {
  yield takeLatest(GET_GAMES_ITEMS, GetGamesItemsSaga);
}
