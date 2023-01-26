import * as actionTypes from '../actionTypes';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return state;
    default:
      return state;
  }
};

export default newsReducer;
