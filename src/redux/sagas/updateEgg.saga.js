import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import egg from '../reducers/egg.reducer';


function* updateEgg(action) {
    // pulling data
    const user = action.payload;
    const oldEgg = yield axios.get(`/egg/${action.payload.id}`)
    const steps = yield axios.get(`/steps/${action.payload.id}`);
    const stepsDetail = steps.data[0];

    try {
        // PUT will adjust egg status (unhatched, cracked, hatched) based on step data
        yield axios.put(`/egg/${user.id}`, {stepsDetail})

        // pulling egg info back from the server
        const newEgg = yield axios.get(`/egg/${action.payload.id}`)

        // sending info to reducer
        yield put({ type: 'SET_EGG', payload: newEgg.data[0] });
        
    } catch {
        console.log('update egg status client-side error');
    }

    // pulling egg info from server
    const newEgg = yield axios.get(`/egg/${action.payload.id}`)
    
    // if statements determines if the egg is newly hatched
    if (newEgg.data[0].status === 3 && oldEgg.data[0].status < 3) {
        yield put ({ type: 'ADD_NEW_FLOOF', payload: user })
    }
}

function* updateEggSaga() {
    yield takeLatest('UPDATE_EGG', updateEgg)
}


export default updateEggSaga;
