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
      const { legalName, email, zipCode } = data;

      const loginFormula = `AND({Legal Name} = '${legalName}', {Email Address} = '${email}', {ZIP/Postal Code} = '${zipCode}')`;

      // TODO: figure out how to deal with allowing both vendors and artists to log in before the tables are combined
      // maybe we just don't let artists log in before they're selected for AA and we add them to a central "Exhibitor" table
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