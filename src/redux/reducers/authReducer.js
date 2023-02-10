import * as actionTypes from '../actionTypes';

const initialState = {
  authUser: {},
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUESTED:
      return {
        authUser: {},
        isLoading: true,
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        authUser: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.AUTH_FAILED:
      return {
        authUser: {},
        isLoading: false,
        error: action.error,
      };
    case actionTypes.VERIFY_REQUESTED:
      return {
        authUser: {},
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
