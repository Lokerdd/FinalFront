import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';
import userSaga from './userSaga';
import sendNewsSaga from './sendNewsSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    newsSaga(),
    verifySaga(),
    logoutSaga(),
    userSaga(),
    sendNewsSaga(),
  ]);
}

export default rootSaga;
