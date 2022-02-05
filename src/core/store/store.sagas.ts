import { all, fork } from 'redux-saga/effects';
import { GamesWatcher } from './games/games.sagas';

export function* rootSaga() {
  yield all([
    fork(GamesWatcher),
  ]);
}