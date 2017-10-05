const USER_FIELDS = [
  'legalName',
  'email',
  'zipCode'
];

const ADMIN_CREDENTIAL = {
  legalName: process.env.REACT_APP_ADMIN_CREDENTIAL_LEGAL_NAME,
  email: process.env.REACT_APP_ADMIN_CREDENTIAL_EMAIL_ADDRESS,
  zipCode: process.env.REACT_APP_ADMIN_CREDENTIAL_ZIP_CODE
};

function isAdminCredential(fields) {
  return USER_FIELDS.map(
    field => [fields[field], ADMIN_CREDENTIAL[field]]
  ).reduce(
    (state, cur) => state && (cur[0] === cur[1]),
    true
  );
}

/* Return a new user object based on fields.
 *
 * This assumes that the field set was already mapped through mapColumns(...,
 * 'auth'). It is mostly of use to the login manager; afterward, the object
 * should be stored as req.session.user.
 *
 * As this is stored in the session, ensure that keys and values stored here
 * are serializeable. In particular, ensure this object can losslessly be
 * passed via JSON.
 */
function newUser(fields) {
  let user = {};

  USER_FIELDS.forEach(field => {
    user[field] = fields[field];
  });

  // Any special processing follows.
  user.isAdmin = isAdminCredential(user);

  return user;
}

module.exports = {
  isAdminCredential,
  newUser
};
