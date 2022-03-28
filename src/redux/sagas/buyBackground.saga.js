import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* buyBackground(action) {

    let background = action.payload.landscape 

    try {
        console.log('in axios buyBackground put, payload is', action.payload)
        yield axios.put(`/shop/${action.payload.user.id}`, 
            { text: `UPDATE "shop" SET "background${background}" = 'TRUE' WHERE id = $1;` }
        )
        yield put({ type: 'FETCH_BOUGHT_ITEMS', payload: action.payload.user });
    } catch {
        console.log('PUT change landscape client-side error');
    }
}

function* buyBackgroundSaga() {
    yield takeLatest('BUY_LANDSCAPE', buyBackground)
}


export default buyBackgroundSaga;
