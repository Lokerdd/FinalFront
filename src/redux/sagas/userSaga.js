import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { newsReceived } from '../actions/news';
import { userReceived, receivingError } from '../actions/user';
import { USER_REQUESTED } from '../actionTypes';

function* userWorker({ payload }) {
  const { currentFilter, searchText, page } = yield select((state) => state.news);
  const path = `users/${payload}?filter=${currentFilter}&search-text=${searchText}&page=${page}`;

  try {
    const { data } = yield call(api.get, path);
    yield put(userReceived(data));
    yield put(newsReceived({ posts: [], pages: data.pages }));
  } catch (error) {
    yield put(receivingError(error.message));
  }
}
function* userWatcher() {
  yield takeLatest(USER_REQUESTED, userWorker);
}

export default userWatcher;
