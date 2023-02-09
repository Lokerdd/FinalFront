import * as actionTypes from '../actionTypes';

export const authRequest = (body) => ({
  type: actionTypes.AUTH_REQUESTED,
  body,
});

export const verifyRequest = () => ({
  type: actionTypes.VERIFY_REQUESTED,
});

export const authSucceed = (payload) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload,
});

export const authFailed = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error,
});
