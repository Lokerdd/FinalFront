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
    const toSend = new FormData();
    toSend.append('_method', 'PUT');
    if (payload.name.trim()) {
      toSend.append('name', payload.name);
    }
    if (payload.image) {
      toSend.append('avatar', payload.image);
    }
    const { data } = yield call(api.post, 'users', toSend);

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
