import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getFloofs(action) {

    try {
        const floofs = yield axios.get(`/floofs/`)
        yield put({ type: 'SET_FLOOFS', payload: floofs.data });
    } catch {
        console.log('GET floofs client-side error');
    }
}

function* getFloofsSaga() {
    yield takeLatest('FETCH_FLOOFS', getFloofs)
}


export default getFloofsSaga;