import {all, fork} from 'redux-saga/effects';
import {GamesWatcher} from './games/games.sagas';
import {ProductsWatcher} from './products/products.sagas';
import {OptionsWatcher} from './options/options.sagas';
import {ExtrasWatcher} from './extras/extras.sagas';

export function* rootSaga() {
    yield all([
        fork(GamesWatcher),
        fork(ProductsWatcher),
        fork(OptionsWatcher),
        fork(ExtrasWatcher)
    ]);
}
