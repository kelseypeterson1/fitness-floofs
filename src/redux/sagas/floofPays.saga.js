import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// when a floof pays for the day, update db to reflect today's date in 'paid' column
function* floofPays(action) {


    try {
        console.log('in floofPays saga, payload is', action.payload)
        // update floof's paid date
        yield axios.put(`/coins/${action.payload.floof.id}`, { date: action.payload.date })
        yield console.log('finished setting floof paid date')
        yield console.log('user id is', action.payload.user.id)
        // add money to user's account
        axios.put(`/income/${action.payload.user.id}`, { floof: action.payload.floof, user: action.payload.user })
        // getting back all user's coins amount 
        yield put({ type: 'FETCH_COINS', payload: action.payload.user });
    } catch {
        console.log('PUT floofPays client-side error');
    }
}

function* floofPaysSaga() {
    yield takeLatest('FLOOF_PAYS', floofPays)
}


export default floofPaysSaga;