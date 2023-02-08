import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import toggleModalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: toggleModalReducer,
  auth: authReducer,
});

export default rootReducer;
