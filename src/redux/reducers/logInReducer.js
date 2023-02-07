import * as actionTypes from '../actionTypes';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const logInReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUESTED:
      return {
        user: [],
        isLoading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        user: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default logInReducer;
