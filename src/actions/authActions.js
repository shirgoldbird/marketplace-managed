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
      const { boothName, phoneNumber, email } = data;
      const loginFormula = `({Booth Name} = '${boothName}') & ({Phone Number} = '${phoneNumber}') & ({Email Address} = '${email}')`;

      connection('Vendors').select({
        filterByFormula: loginFormula,
        maxRecords: 1
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