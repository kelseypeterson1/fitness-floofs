import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* renameFloof(action) {


    try {
        // console.log('in axios put, payload is', action.payload)
        axios.put(`/flock/${action.payload.id}`, { newName: action.payload.newName })
        yield put({ type: 'FETCH_FLOCK', payload: action.payload.user });
    } catch {
        console.log('PUT rename floof client-side error');
    }
}

function* renameFloofSaga() {
    yield takeLatest('RENAME_FLOOF', renameFloof)
}


export default renameFloofSaga;
