import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import toggleModalReducer from './modalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: toggleModalReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
