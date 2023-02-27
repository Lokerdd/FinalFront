import * as actionTypes from '../actionTypes';

export const getNews = () => ({
  type: actionTypes.NEWS_REQUESTED,
});

export const newsReceived = (payload) => ({
  type: actionTypes.NEWS_RECEIVED,
  payload,
});

export const receivingError = (error) => ({
  type: actionTypes.NEWS_FAILED,
  error,
});

export const changeSearchText = (payload) => ({
  type: actionTypes.SEARCH_NEWS,
  payload,
});

export const changeFilter = (payload) => ({
  type: actionTypes.CHANGE_FILTER,
  payload,
});

export const switchPage = (payload) => ({
  type: actionTypes.SWITCH_PAGE,
  payload,
});
