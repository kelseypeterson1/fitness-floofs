import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateEggType(action) {
    console.log('in updateEggTypeSaga');
    yield console.log('in updateEggTypeSaga2');
    const newEggId = 3;

    try {
        yield axios.put(`/egg/${action.payload.user_id}`, { date: action.payload.date, newEgg: newEggId })
        // yield put({ type: 'FETCH_FLOCK', payload: action.payload.user_id });
        // yield put({ type: 'FETCH_SELECTED_FLOOF', payload: action.payload.id })
    } catch {
        yield console.log('PUT change egg type client-side error');
    }
}

function* updateEggTypeSaga() {
    yield takeLatest('UPDATE_EGG_TYPE', updateEggType)
}


export default updateEggTypeSaga;