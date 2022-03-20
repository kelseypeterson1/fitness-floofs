import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewFloof(action) {

    try {
        console.log('in addNewFloof')

        // randomly generating new personality
        const traits = yield axios.get(`/traits`)
        const personalityId = Math.floor(Math.random() * 90)
        const personality = yield (traits.data[personalityId].trait)
        yield console.log('personality trait is:', personality)

        // randomly generating new name
        const nameId = Math.floor(Math.random() * 49) + 89
        const name = yield (traits.data[nameId].trait)
        yield console.log('name is:', name)

        // get current date
        const date = new Date();
        const year = date.getFullYear() * 1e4; // 1e4 gives us the the other digits to be filled later, so 20210000.
        const month = (date.getMonth() + 1) * 100; // months are numbered 0-11 in JavaScript, * 100 to move two digits to the left. 20210011 => 20211100
        const day = date.getDate(); // 20211100 => 20211124
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
        console.log('new floof is', newFloof)

        // sending to server
        yield axios.post(`/flock`, newFloof);

        // fetching flock data
        yield put ({ type: 'SET_NEW_FLOOF', payload: newFloof })
        yield put({ type: 'FETCH_FLOCK', payload: user })



    } catch {
        console.log('POST new floof client-side error');
    }
}

function* addNewFloofSaga() {
    yield takeLatest('ADD_NEW_FLOOF', addNewFloof)
}


export default addNewFloofSaga;