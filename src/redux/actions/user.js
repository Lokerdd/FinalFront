import * as actionTypes from '../actionTypes';

export const userRequest = (payload) => ({
  type: actionTypes.USER_REQUESTED,
  payload,
});

export const userReceived = (payload) => ({
  type: actionTypes.USER_RECEIVED,
  payload,
});

export const receivingError = (error) => ({
  type: actionTypes.USER_FAILED,
  error,
});
