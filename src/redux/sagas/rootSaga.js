import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';
import verifySaga from './verifySaga';

function* rootSaga() {
  yield all([
    authSaga(),
    newsSaga(),
    verifySaga(),
  ]);
}

export default rootSaga;
