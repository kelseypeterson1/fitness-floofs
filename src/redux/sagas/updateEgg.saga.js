import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* updateEgg(action) {
    const user = action.payload;
    const steps = yield axios.get(`/steps/${action.payload.id}`);
    const stepsDetail = steps.data[0];

    try {
        yield axios.put(`/egg/${user.id}`, {stepsDetail})
    } catch {
        console.log('update egg status client-side error');
    }
}

function* updateEggSaga() {
    yield takeLatest('UPDATE_EGG', updateEgg)
}


export default updateEggSaga;
