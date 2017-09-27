import axios from 'axios';

export const REQUEST_DEADLINES = 'REQUEST_DEADLINES';
export const RECEIVE_DEADLINES = 'RECEIVE_DEADLINES';

function requestDeadlines() {
  return {
    type: REQUEST_DEADLINES
  };
}

function receiveDeadlines(deadlines) {
  return {
    type: RECEIVE_DEADLINES,
    deadlines
  }
}

export function fetchDeadlines() {
  return (dispatch) => {
    dispatch(requestDeadlines());
    return axios.get('http://localhost:8081/deadlines', {
      withCredentials: true
    }).then((response) => {
      const { deadlines } = response.data;

      dispatch(receiveDeadlines(deadlines.sort((a, b) => {
        if (a.dueDate > b.dueDate) {
          return 1;
        }
        else if (a.dueDate < b.dueDate) {
          return -1;
        }
        return 0;
      })));
    });
  }
}