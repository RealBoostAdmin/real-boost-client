import {put, takeLatest} from 'redux-saga/effects';
import {supabase} from 'core/supabase';
import {GET_OPTIONS_ITEMS, PatchOptionsState} from './options.actions';

export function* GetOptionsItemsSaga() {
    try {
        const {data} = yield supabase
            .from('_option_items')
            .select('*')
            .order('option_id')

        const newData: any = [];
        let x = 0;
        data.map((optionItem: any) => {
            if (newData[x + 1] && newData[x + 1].id === optionItem.option.id) {
                delete optionItem.option;
                newData[x + 1].items.push(optionItem);
            } else {
                x++;
                newData[x + 1] = optionItem.option
                delete optionItem.option;
                newData[x + 1].items.push(optionItem);
            }
        })

        yield put(PatchOptionsState({items: newData}));
    } catch (error) {
        console.log(error)
    }
}

export function* OptionsWatcher() {
    yield takeLatest(GET_OPTIONS_ITEMS, GetOptionsItemsSaga);
}
