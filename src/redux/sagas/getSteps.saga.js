import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSteps(action) {

    try {
        const user = yield axios.get(`/steps/${action.payload.id}`)
        yield put({ type: 'SET_STEPS', payload: user.data[0] });
    } catch {
        console.log('GET egg client-side error');
    }
}

function* getStepsSaga() {
    yield takeLatest('FETCH_STEPS', getSteps)
}


export default getStepsSaga;