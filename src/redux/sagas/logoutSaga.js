import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import { authSucceed, authFailed } from '../actions/auth';
import toggleModal from '../actions/modal';
import { LOGOUT_REQUESTED } from '../actionTypes';

function* logoutWorker() {
  try {
    yield call(api.post, 'auth/logout');
    localStorage.removeItem('token');
    yield put(authSucceed({ user: {}, isLoggedIN: false }));
    yield put(toggleModal({ isOpen: false }));
  } catch (error) {
    yield put(authFailed(error.message));
  }
}

function* logoutWatcher() {
  yield takeLatest(LOGOUT_REQUESTED, logoutWorker);
}

export default logoutWatcher;
