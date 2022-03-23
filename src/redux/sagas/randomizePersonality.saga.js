import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* randomizePersonality(action) {

    // randomly generating new personality
    const traits = yield axios.get(`/traits`)
    const personalityId = Math.floor(Math.random() * 72)
    const personality = yield (traits.data[personalityId].trait)


    try {
        // console.log('in axios put, payload is', action.payload)
        yield axios.put(`/flock/randomize/${action.payload.id}`, { newPersonality: personality })
        yield put({ type: 'FETCH_FLOCK', payload: action.payload.user });
        yield put({ type: 'FETCH_SELECTED_FLOOF', payload: action.payload.id })
    } catch {
        console.log('PUT randomize personality floof client-side error');
    }
}

function* randomizePersonalitySaga() {
    yield takeLatest('RANDOMIZE_PERSONALITY', randomizePersonality)
}


export default randomizePersonalitySaga;
