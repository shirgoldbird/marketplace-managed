import axios from 'axios';
import { history } from '../store.js';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout(data) {
  return dispatch => {
    dispatch(setCurrentUser({}));
    history.push('/login');
  }
};

export function login(data) {
  const { legalName, email, zipCode } = data;
  return dispatch => {
    return axios.post('http://localhost:8081/auth/login', {
      legalName,
      email,
      zipCode
    }, {
      withCredentials: true
    }).then((response) => {
      const { user } = response.data
      dispatch(setCurrentUser(user));
      history.push('/home');
    }).catch((err) => {
      dispatch(setCurrentUser({}));
    });
  }
};