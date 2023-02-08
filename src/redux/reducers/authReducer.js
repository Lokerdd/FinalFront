import * as actionTypes from '../actionTypes';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUESTED:
      return {
        user: [],
        isLoading: true,
        error: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.AUTH_FAILED:
      return {
        user: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
