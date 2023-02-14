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

function* authWorker({ payload }) {
  try {
    const modalType = yield select((state) => state.modal.modalType);
    const path = modalType === 'Sign Up'
      ? 'auth/register'
      : 'auth/login';
    const { data: { token, user } } = yield call(api.post, path, payload);
    localStorage.setItem('token', token);
    yield put(authSucceed({ isLoggedIn: true, user }));
    yield put(toggleModal({ isOpen: false }));
  } catch (error) {
    yield put(authFailed(error.response.data.message));
  }
}
function* authWatcher() {
  yield takeLatest(AUTH_REQUESTED, authWorker);
}
export default authWatcher;
