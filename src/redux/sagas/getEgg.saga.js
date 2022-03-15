import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getEgg(action) {

    try {
        const user = yield axios.get(`/egg/${action.payload.id}`)
        yield put({ type: 'SET_EGG', payload: user.data[0] });
    } catch {
        console.log('GET egg client-side error');
    }
}

function* getEggSaga() {
    yield takeLatest('FETCH_EGG', getEgg)
}


export default getEggSaga;