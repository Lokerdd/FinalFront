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
        news: [],
        isLoading: true,
        error: null,
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        news: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.NEWS_FAILED:
      return {
        news: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default newsReducer;
