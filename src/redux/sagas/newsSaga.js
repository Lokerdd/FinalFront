import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { newsReceived, receivingError } from '../actions/news';
import { NEWS_REQUESTED } from '../actionTypes';

function* newsWorker() {
  const { currentFilter, searchText } = yield select((state) => state.news);
  const path = `posts?filter=${currentFilter}&search-text=${searchText}`;

  try {
    const { data } = yield call(api.get, path);
    yield put(newsReceived(data));
  } catch (error) {
    yield put(receivingError(error.message));
  }
}
function* newsWatcher() {
  yield takeLatest(NEWS_REQUESTED, newsWorker);
}
export default newsWatcher;
