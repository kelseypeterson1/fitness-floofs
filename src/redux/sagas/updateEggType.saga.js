import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateEggType(action) {
    console.log('in updateEggTypeSaga');

    // generating new random egg for user
    const randomWithProbability = () => {
        const notRandomNumbers = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11];
        const idx = Math.floor(Math.random() * notRandomNumbers.length);
        return notRandomNumbers[idx];
      }
      const newEggId = randomWithProbability();
      console.log('new randomly generated egg is', newEggId)

    // sending the new egg to the server
    try {
        yield axios.put(`/egg/${action.payload.user_id}`, { date: action.payload.date, newEgg: newEggId })
    } catch {
        yield console.log('PUT change egg type client-side error');
    }
}

function* updateEggTypeSaga() {
    yield takeLatest('UPDATE_EGG_TYPE', updateEggType)
}


export default updateEggTypeSaga;