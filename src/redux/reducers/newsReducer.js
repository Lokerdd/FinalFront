import * as actionTypes from '../actionTypes';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  searchText: '',
  currentFilter: 'All',
  page: 1,
  amountOfPages: 0,
};

const newsReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
        news: [],
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        ...state,
        news: action.payload.posts,
        amountOfPages: action.payload.pages,
        isLoading: false,
        error: null,
      };
    case actionTypes.NEWS_FAILED:
      return {
        ...initialState,
        error: action.error,
        searchText: state.searchText,
        currentFilter: state.currentFilter,
      };
    case actionTypes.SEARCH_NEWS:
      return {
        ...state,
        searchText: action.payload,
        page: 1,
      };
    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        currentFilter: action.payload,
        page: 1,
      };
    case actionTypes.SWITCH_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
