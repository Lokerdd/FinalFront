import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    newsSaga(),
    verifySaga(),
    logoutSaga(),
    userSaga(),
  ]);
}

export default rootSaga;
