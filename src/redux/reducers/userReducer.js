import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  userPosts: [],
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
        userPosts: action.payload.posts,
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
        userPosts: state.userPosts,
      };
    case actionTypes.SENDING_NEWS_SUCCESS:
      return {
        ...initialState,
        user: state.user,
        userPosts: [action.payload, ...state.userPosts],
      };
    case actionTypes.SENDING_NEWS_FAILED:
      return {
        ...initialState,
        error: action.error,
        user: state.user,
        userPosts: state.userPosts,
      };
    default:
      return state;
  }
};

export default userReducer;
