import * as actionTypes from '../actionTypes';

export const logIn = () => ({
  type: actionTypes.LOGIN_REQUESTED,
});

export const successfullyLogged = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

export const logInFailed = (error) => ({
  type: actionTypes.LOGIN_FAILED,
  error,
});
