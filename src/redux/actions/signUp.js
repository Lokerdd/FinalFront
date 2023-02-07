import * as actionTypes from '../actionTypes';

export const signUp = () => ({
  type: actionTypes.SIGN_UP_REQUESTED,
});

export const successfullySignedUp = (payload) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailed = (error) => ({
  type: actionTypes.SIGN_UP_FAILED,
  error,
});
