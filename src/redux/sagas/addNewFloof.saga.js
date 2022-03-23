import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewFloof(action) {

    try {

        // randomly generating new personality
        const traits = yield axios.get(`/traits`)
        const personalityId = Math.floor(Math.random() * 72)
        const personality = yield (traits.data[personalityId].trait)

        // randomly generating new name
        const nameId = Math.floor(Math.random() * 49) + 71
        const name = yield (traits.data[nameId].trait)

        // get current date
        const date = new Date();
        const year = date.getFullYear() * 1e4; 
        const month = (date.getMonth() + 1) * 100; 
        const day = date.getDate(); 
        const fullDateUnformatted = (year + month + day + '')
        const fullDate = fullDateUnformatted.slice(0, 4) + '-' + fullDateUnformatted.slice(4, 6) + '-' + fullDateUnformatted.slice(6)

        // putting together new floof properties
        const user = action.payload
        const egg = yield axios.get(`/egg/${user.id}`)
        const newFloofId = yield axios.get(`/egg-to-floof/${egg.data[0].egg_id}`)
        const newFloof = yield {
            floof_id: newFloofId.data[0].id,
            user_id: user.id,
            name: name,
            personality: personality,
            birthday: fullDate
        }

        // posting to server and returning with id
        const id = yield axios.post(`/flock`, newFloof);

        // adding id from db to new floof object before sending it to reducer
        const newFloofData = yield {
            id: id.data[0].id,
            floof_id: newFloofId.data[0].id,
            user_id: user.id,
            name: name,
            personality: personality,
            birthday: fullDate
        }
        yield put ({ type: 'SET_NEW_FLOOF', payload: newFloofData })

        // fetching flock data
        yield put({ type: 'FETCH_FLOCK', payload: user })



    } catch {
        console.log('POST new floof client-side error');
    }
}

function* addNewFloofSaga() {
    yield takeLatest('ADD_NEW_FLOOF', addNewFloof)
}


export default addNewFloofSaga;