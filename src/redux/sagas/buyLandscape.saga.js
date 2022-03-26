import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* buyLandscape(action) {


    try {
        console.log('in axios landscape put, payload is', action.payload)
        axios.put(`/coins/shop/${action.payload.user.id}`, { landscape: action.payload.landscape })
        // yield put({ type: 'FETCH_FLOCK', payload: action.payload.user });
        // yield put({ type: 'FETCH_SELECTED_FLOOF', payload: action.payload.id })
    } catch {
        console.log('PUT change landscape client-side error');
    }
}

function* buyLandscapeSaga() {
    yield takeLatest('BUY_LANDSCAPE', buyLandscape)
}


export default buyLandscapeSaga;
