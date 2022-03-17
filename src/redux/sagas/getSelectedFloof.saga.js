import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSelectedFloof(action) {

    try {
        const floof = yield axios.get(`/floofs/${action.payload}`)
        yield put({ type: 'SET_SELECTED_FLOOF', payload: floof.data });
    } catch {
        console.log('GET selected floof\'s data from db, client-side error');
    }
}

function* getSelectedFloofSaga() {
    yield takeLatest('FETCH_SELECTED_FLOOF', getSelectedFloof)
}


export default getSelectedFloofSaga;