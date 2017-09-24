import axios from 'axios';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

export function logout(data) {
  return dispatch => {
    dispatch(setCurrentUser({}));
  }
};

export function login(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const { legalName, email, zipCode } = data;

      axios.post('http://localhost:8081/auth/login', {
        legalName,
        email,
        zipCode
      }, {
        withCredentials: true
      }).then((response) => {
        const { user } = response.data
        dispatch(setCurrentUser(user));
      }).catch((err) => {
        dispatch(setCurrentUser({}));
      });
    });
  }
};