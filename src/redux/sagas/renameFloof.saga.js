import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* renameFloof(action) {


    try {
        axios.put(`/flock/${action.payload.id}`, { newName: action.payload.newName })
        yield put({ type: 'FETCH_FLOCK', payload: action.payload.user });
        yield put({ type: 'FETCH_SELECTED_FLOOF', payload: action.payload.id })
    } catch {
        console.log('PUT rename floof client-side error');
    }
}

function* renameFloofSaga() {
    yield takeLatest('RENAME_FLOOF', renameFloof)
}


export default renameFloofSaga;
