import * as actionTypes from '../actionTypes';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...initialState,
        isLoading: true,
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        ...initialState,
        news: action.payload,
      };
    case actionTypes.NEWS_FAILED:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

export default newsReducer;
