import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { newsSent, sendingFailed } from '../actions/user';
import toggleModal from '../actions/modal';
import { SENDING_NEWS_REQUESTED } from '../actionTypes';

function* sendNewsWorker({ payload }) {
  try {
    const { data } = yield call(api.post, 'posts', payload);

    yield put(newsSent(data));
    yield put(toggleModal({ isOpen: false }));
  } catch (error) {
    yield put(sendingFailed(error.message));
  }
}
function* sendNewsWatcher() {
  yield takeLatest(SENDING_NEWS_REQUESTED, sendNewsWorker);
}
export default sendNewsWatcher;
