import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import deadline from './deadline';
import document from './document';

const rootReducer = combineReducers({
  auth,
  deadline,
  document,
  routing: routerReducer
});

export default rootReducer;