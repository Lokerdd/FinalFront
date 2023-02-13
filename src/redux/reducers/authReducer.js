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
        ...initialState,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...initialState,
        authUser: action.payload,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...initialState,
        error: action.error,
      };
    case actionTypes.VERIFY_REQUESTED:
      return {
        ...initialState,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
