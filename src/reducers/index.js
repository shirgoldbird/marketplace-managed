import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth, { initialState as authState } from './auth';
import deadline, { initialState as deadlineState } from './deadline';
import document, { initialState as documentState } from './document';

// Create an object for the default data
export const defaultState = {
  auth: authState,
  deadline: deadlineState,
  document: documentState
};

const rootReducer = combineReducers({
  auth,
  deadline,
  document,
  routing: routerReducer
});

export default rootReducer;