import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import { newsReceived, receivingError } from '../actions/news';
import { NEWS_REQUESTED } from '../actionTypes';

function* newsWorker() {
  try {
    const news = yield call(api.get, 'post');
    yield put(newsReceived(news.data));
  } catch (error) {
    yield put(receivingError(error.message));
  }
}
function* newsWatcher() {
  yield takeLatest(NEWS_REQUESTED, newsWorker);
}
export default newsWatcher;
