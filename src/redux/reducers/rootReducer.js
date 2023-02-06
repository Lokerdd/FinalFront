import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import toggleModalReducer from './modalReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: toggleModalReducer,
});

export default rootReducer;
