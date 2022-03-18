import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewFloof(action) {

    try {
        // putting together new floof properties
        const user = action.payload
        const egg = yield axios.get(`/egg/${user.id}`)
        const newFloofId = yield axios.get(`/egg-to-floof/${egg.data[0].egg_id}`)
        const newFloof = yield {
            floof_id: newFloofId.data[0].id,
            user_id: user.id,
            name: 'test',
            personality: 'test personality'
        }

        // sending to server
        yield axios.post(`/flock`, newFloof);

        // fetching flock data
        yield put({ type: 'FETCH_FLOCK', payload: user })
        yield console.log('new floof added!', newFloof)
    
    } catch {
        console.log('POST new floof client-side error');
    }
}

function* addNewFloofSaga() {
    yield takeLatest('ADD_NEW_FLOOF', addNewFloof)
}


export default addNewFloofSaga;