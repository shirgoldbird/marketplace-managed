import _isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER } from '../actions/authActions';
import { REHYDRATE } from 'redux-persist/constants'

export const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !_isEmpty(action.user),
        user: action.user
      };
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.auth
      };
    default:
      return state;
  }
}
