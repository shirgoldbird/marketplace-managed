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

      fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          legalName,
          email,
          zipCode
        })
      }).then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        }

        throw new Error('Response not JSON');
      }).then(({ user }) => {
        dispatch(setCurrentUser(user));
      }).catch((err) => {
        dispatch(setCurrentUser({}));
      });
    });
  }
};