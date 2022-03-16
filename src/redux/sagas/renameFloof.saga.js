import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* renameFloof(action) {

    // axios.put(`/feedback/${row.id}`, { flagged: feedbackSelected })
    //         .then(response => {
    //             // toggles the feedback state
    //             fetchFeedback();
    //         })
    //         .catch(err => {
    //             console.log('Error updating feedback', err);
    //         })

    try {
        console.log('in axios put, payload is', action.payload)
        axios.put(`/flock/${action.payload.id}`, { newName: action.payload.newName })
        yield put({ type: 'FETCH_FLOCK' });
    } catch {
        console.log('PUT rename floof client-side error');
    }
}

function* renameFloofSaga() {
    yield takeLatest('RENAME_FLOOF', renameFloof)
}


export default renameFloofSaga;

// export default function* addMovie(action) {
//     // add movie to DB
//     try { 
//         console.log('movie sent is:', action.payload)
//         yield axios.post(`/api/movie`, action.payload);
//         yield put({ type: 'FETCH_MOVIES' })

//     } catch (err) {
//         console.log('POST error is', err);
//     }
    
// }