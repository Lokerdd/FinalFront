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
