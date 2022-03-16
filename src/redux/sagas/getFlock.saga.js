import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getFlock(action) {

    try {
        console.log('in fetch flock, action.payload is', action.payload)
        const flock = yield axios.get(`/flock/${action.payload.id}`)
        yield put({ type: 'SET_FLOCK', payload: flock.data });
    } catch {
        console.log('GET flock client-side error');
    }
}

function* getFlockSaga() {
    yield takeLatest('FETCH_FLOCK', getFlock)
}


export default getFlockSaga;