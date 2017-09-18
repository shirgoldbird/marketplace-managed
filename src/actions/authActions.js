import connection from '../airtable';
import { mapColumns } from '../utils/mapColumns';

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
      const { legalName, email, zip } = data;

      const loginFormula = `AND({Legal Name} = '${legalName}', {Email Address} = '${email}', {ZIP/Postal Code} = '${zip}')`;
 
      connection('Vendors').select({
        filterByFormula: loginFormula
      }).firstPage((err, records) => {
        if (err) {
          reject(dispatch(setCurrentUser({})))
        }
        else if (!records.length) {
          reject(dispatch(setCurrentUser({})));
        } else {
          resolve(dispatch(setCurrentUser({
            ...mapColumns(records[0].fields)
          })));
        }
      });
    });
  }
};