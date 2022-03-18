import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* checkDate(action) {
    const userId = action.payload.user.id;
    const currentDate = action.payload.date;
    
    // getting date from database
    const dbDateData = yield axios.get(`/egg/${userId}`)
    const dbDateWithTime = dbDateData.data[0].date;
    // removing time from date
    const dbDate = dbDateWithTime.split('T')[0];

    
    console.log('prior date is', dbDate)
    console.log('todays date is', currentDate)

    // if (currentDate != dbDate) {
    //     try {
    //         // putting together new egg properties
    //         const user = action.payload
    //         const egg = yield axios.get(`/egg/${user.id}`)
    //         const newEgg = yield {
    //             floof_id: newFloofId.data[0].id,
    //             user_id: user.id,
    //             name: 'test',
    //             personality: 'test personality'
    //         }

    //         // sending to server
    //         yield axios.post(`/egg`, newEgg);
    //     } catch {
    //         console.log('GET egg client-side error');
    //     }
    // }
}

function* checkDateSaga() {
    yield takeLatest('CHECK_DATE', checkDate)
}


export default checkDateSaga;