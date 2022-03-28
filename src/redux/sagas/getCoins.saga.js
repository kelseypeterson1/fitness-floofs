import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCoins(action) {

    try {
        console.log('getCoins action.payload is', action.payload)
        const coins = yield axios.get(`/coins/${action.payload.id}`)
        yield put({ type: 'SET_COINS', payload: coins.data[0] });
        yield put({ type: 'FETCH_FLOCK', payload: action.payload });
    } catch {
        console.log('GET coins client-side error');
    }
}

function* getCoinsSaga() {
    yield takeLatest('FETCH_COINS', getCoins)
}


export default getCoinsSaga;