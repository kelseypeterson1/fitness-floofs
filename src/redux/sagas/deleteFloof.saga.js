import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteFloof(action) {


    try {
        console.log('in axios delete, payload is', action.payload)
        axios.delete(`/flock/${action.payload.id}`)
        yield put({ type: 'FETCH_FLOCK', payload: action.payload.user});
    } catch {
        console.log('DELETE floof client-side error');
    }
    yield put({ type: 'CLEAR_NEW_FLOOF' })
}

function* deleteFloofSaga() {
    yield takeLatest('DELETE_FLOOF', deleteFloof)
}


export default deleteFloofSaga;
