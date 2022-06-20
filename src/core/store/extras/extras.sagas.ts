import {put, takeLatest} from 'redux-saga/effects';
import {supabase} from 'core/supabase';
import {GET_EXTRAS_ITEMS, PatchExtrasState} from './extras.actions';

export function* GetExtrasItemsSaga() {
    try {
        const {data} = yield supabase
            .from('extras')
            .select('*')

        yield put(PatchExtrasState({items: data}));
    } catch (error) {
        console.log(error)
    }
}

export function* ExtrasWatcher() {
    yield takeLatest(GET_EXTRAS_ITEMS, GetExtrasItemsSaga);
}
