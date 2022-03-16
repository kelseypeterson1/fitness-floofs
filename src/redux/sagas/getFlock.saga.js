import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getFlock(action) {

    try {
        const user = yield axios.get(`/flock/${action.payload.id}`)
        yield put({ type: 'SET_FLOCK', payload: user.data[0] });
    } catch {
        console.log('GET flock client-side error');
    }
}

function* getFlockSaga() {
    yield takeLatest('FETCH_FLOCK', getFlock)
}


export default getFlockSaga;