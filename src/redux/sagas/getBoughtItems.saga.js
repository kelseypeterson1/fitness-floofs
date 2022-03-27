import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getBoughtItems(action) {

    try {
        console.log('getBoughtItems action.payload is', action.payload)
        const items = yield axios.get(`/shop/${action.payload.id}`)
        yield console.log ('got bought items')
        yield put({ type: 'SET_BOUGHT_ITEMS', payload: items.data[0] });
    } catch {
        console.log('GET background client-side error');
    }
}

function* getBoughtItemsSaga() {
    yield takeLatest('FETCH_BOUGHT_ITEMS', getBoughtItems)
}


export default getBoughtItemsSaga;