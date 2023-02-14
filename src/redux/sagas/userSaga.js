import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import { userReceived, receivingError } from '../actions/user';
import { USER_REQUESTED } from '../actionTypes';

function* userWorker({ payload }) {
  try {
    const { data } = yield call(api.get, `users/${payload}`);
    yield put(userReceived(data));
  } catch (error) {
    yield put(receivingError(error.message));
  }
}
function* userWatcher() {
  yield takeLatest(USER_REQUESTED, userWorker);
}

export default userWatcher;
