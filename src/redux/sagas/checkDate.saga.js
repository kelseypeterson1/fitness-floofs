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

    // NEED TO KEEP CONSOLE LOGS
    yield console.log('prior date is', dbDate)
    console.log('todays date is', currentDate)

    // if db has old date in it, update egg row in db with new date and new egg
    if (currentDate != dbDate) {
        console.log('date has changed')
        yield put({ type: 'UPDATE_EGG_TYPE', payload: {user_id: userId, date: currentDate }})
    } else {
        console.log('date has not changed')
    }
    yield console.log('outside of if in check date')
}

function* checkDateSaga() {
    yield takeLatest('CHECK_DATE', checkDate)
}


export default checkDateSaga;