import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.USER_REQUESTED:
      return {
        ...initialState,
        isLoading: true,
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...initialState,
        user: action.payload,
      };
    case actionTypes.USER_FAILED:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
