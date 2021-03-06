import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewFloof(action) {
    
    try {
        console.log('in addNewFloof')
        // fetching flock data
        const flockData = yield axios.get(`/flock/${action.payload.id}`)
        const flock = flockData.data
        
        // putting together new floof properties
        const user = action.payload
        const egg = yield axios.get(`/egg/${user.id}`)
        const newFloofId = yield axios.get(`/egg-to-floof/${egg.data[0].egg_id}`)

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
        
        // get yesterday's date for 'paid' column
        const yesterday = day - 1;
        const yesterdayDateUnformatted = (year + month + yesterday + '')
        const yesterdayFullDate = yesterdayDateUnformatted.slice(0, 4) + '-' + yesterdayDateUnformatted.slice(4, 6) + '-' + yesterdayDateUnformatted.slice(6)
        

        // randomizing income
        let income = 0;
        // if new floof has a rarity of 1
        // income is between 1-2
        if(newFloofId.data[0].id < 5) {
            income = Math.floor(Math.random() * 2) + 1
            // if new floof has a rarity of 2
            // income is between 3-5
        } else if (newFloofId.data[0].id < 10) {
            income = Math.floor(Math.random() * 3) + 3
            // if new floof has a rarity of 3
            // income is between 6-10
        } else {
            income = Math.floor(Math.random() * 5) + 6
        }
        yield console.log('income is', income)
        yield console.log('yesterday is', yesterdayFullDate)
        

        // grouping floof properties into an object
        const newFloof = yield {
            floof_id: newFloofId.data[0].id,
            user_id: user.id,
            name: name,
            personality: personality,
            birthday: fullDate,
            income: income,
            paid: yesterdayFullDate
        }
        
        
        // posting to server and returning with id
        const id = yield axios.post(`/flock`, newFloof);
        
        // figuring out if that floof type already exists in the database
        let conflict = false;
        for (let floof of flock) {
            console.log('floof match', newFloof.floof_id, floof.floof_id)
            if (newFloof.floof_id === floof.floof_id) {
                conflict = true;
            }
        }
        console.log('conflict is', conflict)

        // adding id from db and conflict status to new floof object before sending it to reducer
        const newFloofData = yield {
            id: id.data[0].id,
            floof_id: newFloofId.data[0].id,
            user_id: user.id,
            name: name,
            personality: personality,
            birthday: fullDate,
            income: income,
            paid: yesterdayFullDate,
            conflict: conflict
        }
        yield put({ type: 'SET_NEW_FLOOF', payload: newFloofData })

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