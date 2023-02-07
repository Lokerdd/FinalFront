import * as actionTypes from '../actionTypes';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const signUpReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_REQUESTED:
      return {
        user: [],
        isLoading: true,
        error: null,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.SIGN_UP_FAILED:
      return {
        user: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default signUpReducer;
