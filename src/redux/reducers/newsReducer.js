import * as actionTypes from '../actionTypes';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  searchText: '',
  currentFilter: 'All',
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
    case actionTypes.SEARCH_NEWS:
      return {
        ...state,
        searchText: action.payload,
      };
    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        currentFilter: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
