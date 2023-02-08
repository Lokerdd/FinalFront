import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import newsSaga from './newsSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    newsSaga(),
  ]);
}

export default rootSaga;
