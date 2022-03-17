import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { takeEvery} from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_ITEM"
function* addFloof(action) {
try { 
    console.log('in saga, floof sent is', action.payload);
    yield axios.post(`/flock`, action.payload);
    yield put({ type: 'FETCH_FLOCK' })

} catch (err) {
    console.log('POST error is', err);
}}

function* addFloofSaga() {
    yield takeLatest('ADD_FLOOF', addFloof);
}

export default addFloofSaga;