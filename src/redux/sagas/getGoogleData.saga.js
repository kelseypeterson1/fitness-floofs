import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGoogleData() {

    try {
        const urlData = yield axios.get(`/api/google`)
        console.log('url data from spike is:', urlData)
        yield window.open(
            `${urlData.data.url}`, "_blank")
        yield 
    } catch {
        console.log('GET google data client-side error');
    }
}

function* getGoogleDataSaga() {
    yield takeLatest('FETCH_GOOGLE_DATA', getGoogleData)
}


export default getGoogleDataSaga;