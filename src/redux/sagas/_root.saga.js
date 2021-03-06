import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getEggSaga from './getEgg.saga';
import getStepsSaga from './getSteps.saga';
import getFlockSaga from './getFlock.saga';
import getFloofsSaga from './getFloofs.saga';
import renameFloofSaga from './renameFloof.saga';
import deleteFloofSaga from './deleteFloof.saga';
import getSelectedFloofSaga from './getSelectedFloof.saga';
import getGoogleDataSaga from './getGoogleData.saga';
import updateEggStatusSaga from './updateEggStatus.saga';
import addNewFloofSaga from './addNewFloof.saga';
import checkDateSaga from './checkDate.saga';
import updateEggTypeSaga from './updateEggType.saga';
import randomizePersonalitySaga from './randomizePersonality.saga';
import getCoinsSaga from './getCoins.saga';
import floofPaysSaga from './floofPays.saga';
import payCoinsSaga from './payCoins.saga';
import buyBackgroundSaga from './buyBackground.saga';
import getBoughtItemsSaga from './getBoughtItems.saga';
import updateBackgroundSaga from './updateBackground.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getEggSaga(),
    getStepsSaga(),
    getFlockSaga(),
    getFloofsSaga(),
    renameFloofSaga(),
    deleteFloofSaga(),
    getSelectedFloofSaga(),
    getGoogleDataSaga(),
    updateEggStatusSaga(),
    addNewFloofSaga(),
    checkDateSaga(),
    updateEggTypeSaga(),
    randomizePersonalitySaga(),
    getCoinsSaga(),
    floofPaysSaga(),
    payCoinsSaga(),
    buyBackgroundSaga(),
    getBoughtItemsSaga(),
    updateBackgroundSaga(),
  ]);
}
