import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    newsSaga(),
    verifySaga(),
    logoutSaga(),
  ]);
}

export default rootSaga;
