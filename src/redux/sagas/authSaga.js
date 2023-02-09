import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { authSucceed, authFailed } from '../actions/auth';
import toggleModal from '../actions/modal';
import { AUTH_REQUESTED } from '../actionTypes';

function* authWorker({ body }) {
  try {
    const path = (yield select((state) => state.modal.modalType)) === 'Sign Up'
      ? 'auth/register'
      : 'auth/login';
    const response = yield call(api.post, path, body);
    if (response) {
      localStorage.setItem('token', response.data.token);
      yield put(authSucceed(response.data.user));
      yield put(toggleModal({ isOpen: false }));
    }
  } catch (error) {
    try {
      yield put(authFailed(error.response.data.message));
    } catch (e) {
      yield put(authFailed(error));
    }
  }
}
function* authWatcher() {
  yield takeLatest(AUTH_REQUESTED, authWorker);
}
export default authWatcher;
