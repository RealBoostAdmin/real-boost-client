import {put, takeLatest} from 'redux-saga/effects';
import {supabase} from 'core/supabase';
import {GET_PRODUCTS_ITEMS, PatchProductsState} from './products.actions';

export function* GetProductsItemsSaga({gameId}: any) {
    try {
        const {data} = yield supabase
            .from('products')
            .select('*')
            .match({game_id: gameId})

        yield put(PatchProductsState({items: data}));
    } catch (error) {
        console.log(error)
    }
}

export function* ProductsWatcher() {
    yield takeLatest(GET_PRODUCTS_ITEMS, GetProductsItemsSaga);
}
