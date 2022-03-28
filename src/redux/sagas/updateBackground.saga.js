import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateBackground(action) {
    console.log('in updateBackgroundSaga');

    try {
        yield axios.put(`/shop/select/${action.payload.user.id}`, { background: action.payload.background })
        yield put({ type: 'FETCH_BOUGHT_ITEMS', payload: action.payload.user });
    } catch {
        yield console.log('PUT change background type client-side error');
    }
}

function* updateBackgroundSaga() {
    yield takeLatest('UPDATE_BACKGROUND', updateBackground)
}


export default updateBackgroundSaga;