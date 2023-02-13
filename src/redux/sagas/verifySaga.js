import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import { authSucceed, authFailed } from '../actions/auth';
import { VERIFY_REQUESTED } from '../actionTypes';

function* verifyWorker() {
  try {
    const { data: { user } } = yield call(api.get, 'auth/whoiam');
    yield put(authSucceed(user));
  } catch (error) {
    yield put(authFailed(error.message));
  }
}

function* verifyWatcher() {
  yield takeLatest(VERIFY_REQUESTED, verifyWorker);
}

export default verifyWatcher;
