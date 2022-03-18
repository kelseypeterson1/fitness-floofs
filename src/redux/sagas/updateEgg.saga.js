import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import egg from '../reducers/egg.reducer';


function* updateEgg(action) {
    const user = action.payload;
    const oldEgg = yield axios.get(`/egg/${action.payload.id}`)
    const steps = yield axios.get(`/steps/${action.payload.id}`);
    const stepsDetail = steps.data[0];

    try {
        yield axios.put(`/egg/${user.id}`, {stepsDetail})
        const newEgg = yield axios.get(`/egg/${action.payload.id}`)
        yield put({ type: 'SET_EGG', payload: newEgg.data[0] });
        
    } catch {
        console.log('update egg status client-side error');
    }

    yield console.log('done with try')
    const newEgg = yield axios.get(`/egg/${action.payload.id}`)
    if (newEgg.data[0].status === 3 && oldEgg.data[0].status < 3) {
        console.log('newly hatched!')
    }
}

function* updateEggSaga() {
    yield takeLatest('UPDATE_EGG', updateEgg)
}


export default updateEggSaga;
