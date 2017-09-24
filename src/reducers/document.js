import {
  REQUEST_DOCUMENTS,
  RECEIVE_DOCUMENTS
} from '../actions/documentActions';

export const initialState = {
  isFetching: false,
  items: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_DOCUMENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_DOCUMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.documents
      }
    default:
      return state;
  }
}