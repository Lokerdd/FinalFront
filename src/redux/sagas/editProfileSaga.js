import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { editSucceed, editFailed } from '../actions/user';
import toggleModal from '../actions/modal';
import { EDIT_PROFILE_REQUESTED } from '../actionTypes';

function* editProfileWorker({ payload }) {
  try {
    const dataToSend = new FormData();
    dataToSend.append('_method', 'PUT');
    Object.keys(payload).forEach((key) => {
      dataToSend.append(key, payload[key]);
    });
    const { data } = yield call(api.post, 'users', dataToSend);

    yield put(editSucceed(data));
    yield put(toggleModal({ isOpen: false }));
  } catch (error) {
    yield put(editFailed(error.message));
  }
}

function* editProfileWatcher() {
  yield takeLatest(EDIT_PROFILE_REQUESTED, editProfileWorker);
}
export default editProfileWatcher;
