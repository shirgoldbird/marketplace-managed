import {
  REQUEST_DEADLINES,
  RECEIVE_DEADLINES
} from '../actions/deadlineActions';

export const initialState = {
  isFetching: false,
  items: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_DEADLINES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_DEADLINES:
      return {
        ...state,
        isFetching: false,
        items: action.deadlines
      }
    default:
      return state;
  }
}