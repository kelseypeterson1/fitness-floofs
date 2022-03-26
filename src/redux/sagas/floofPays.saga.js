import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// when a floof pays for the day, update db to reflect today's date in 'paid' column
function* floofPays(action) {


    try {
        console.log('in floofPays saga, payload is', action.payload)
        axios.put(`/coins/${action.payload.id}`, { date: action.payload.date })
        yield put({ type: 'FETCH_FLOCK', payload: action.payload.user });
    } catch {
        console.log('PUT floofPays client-side error');
    }
}

function* floofPaysSaga() {
    yield takeLatest('FLOOF_PAYS', floofPays)
}


export default floofPaysSaga;