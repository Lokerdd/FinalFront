import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  userPost: [],
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
        userPost: action.payload.posts,
      };
    case actionTypes.USER_FAILED:
      return {
        ...initialState,
        error: action.error,
      };
    case actionTypes.SENDING_NEWS_REQUESTED:
      return {
        ...initialState,
        isLoading: true,
        user: state.user,
        userPost: state.userPost,
      };
    case actionTypes.SENDING_NEWS_SUCCESS:
      return {
        ...initialState,
        user: state.user,
        userPost: [action.payload, ...state.userPost],
      };
    case actionTypes.SENDING_NEWS_FAILED:
      return {
        ...initialState,
        error: action.error,
        user: state.user,
        userPost: state.userPost,
      };
    default:
      return state;
  }
};

export default userReducer;
