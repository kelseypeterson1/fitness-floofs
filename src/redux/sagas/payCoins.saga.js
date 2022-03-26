import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* payCoins(action) {


    try {
        console.log('in axios put, payload is', action.payload)
        axios.put(`/coins/pay/${action.payload.user.id}`, { amount: action.payload.amount })
        yield console.log('axios.put in coins is done')
        yield put({ type: 'FETCH_COINS', payload: action.payload.user });
        // yield put({ type: 'FETCH_SELECTED_FLOOF', payload: action.payload.id })
    } catch {
        console.log('PUT pay coins client-side error');
    }
}

function* payCoinsSaga() {
    yield takeLatest('PAY_COINS', payCoins)
}


export default payCoinsSaga;
