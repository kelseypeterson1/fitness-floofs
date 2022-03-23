import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSteps(action) {

    try {
        const steps = yield axios.get(`/steps/${action.payload.id}`)
        yield put({ type: 'SET_STEPS', payload: steps.data[0] });
    } catch {
        console.log('GET egg client-side error');
    }
}

function* getStepsSaga() {
    yield takeLatest('FETCH_STEPS', getSteps)
}


export default getStepsSaga;