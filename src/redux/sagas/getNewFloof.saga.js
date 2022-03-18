import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getNewFloof(action) {

    try {
        console.log('getting new floof')
        const user = action.payload
        yield console.log('egg.id is sent, egg is', egg.data.data.egg_id)

        const egg = yield axios.get(`/egg/${user.id}`)
        yield console.log('egg.id is sent, egg is', egg.data.data.egg_id)
        const newFloof = yield axios.get(`/egg-to-floof/${egg.data.data.egg_id}`)
        // yield put({ type: 'ADD_FLOOF', payload: newFloof })
        // console.log('just tried to add new floof with data', newFloof)
    } catch {
        console.log('POST new floof client-side error');
    }
}

function* getNewFloofSaga() {
    yield takeLatest('FETCH_NEW_FLOOF', getNewFloof)
}


export default getNewFloofSaga;