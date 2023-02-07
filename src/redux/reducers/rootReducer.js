import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import toggleModalReducer from './modalReducer';
import signUpReducer from './signUpReducer';
import logInReducer from './logInReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: toggleModalReducer,
  signUp: signUpReducer,
  logIn: logInReducer,
});

export default rootReducer;
