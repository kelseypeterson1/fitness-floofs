import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    // brings back the user id
    const idData = yield axios.post('/api/user/register', action.payload);
    const id =  yield idData.data[0].id
    yield console.log('id is', id)

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });

    // add user to tables in db
    yield axios.post(`/coins/${id}`)
    yield axios.post(`/egg/${id}`)
    yield axios.post(`/shop/${id}`)
    yield axios.post(`/steps/${id}`)


  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
