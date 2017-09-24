import axios from 'axios';

export const REQUEST_DOCUMENTS = 'REQUEST_DOCUMENTS';
export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';

function requestDocuments() {
  return {
    type: REQUEST_DOCUMENTS
  };
}

function receiveDocuments(documents) {
  return {
    type: RECEIVE_DOCUMENTS,
    documents
  }
}

export function fetchDocuments() {
  return (dispatch) => {
    dispatch(requestDocuments());
    return axios.get('http://localhost:8081/documents', {
      withCredentials: true
    }).then((response) => {
      const { documents } = response.data;

      dispatch(receiveDocuments(documents));
    });
  }
}