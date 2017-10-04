const USER_FIELDS = [
  'legalName',
  'email',
  'zipCode'
];

const ADMIN_EMAIL = 'root@bronycon.org';

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
  user.isAdmin = (user.email === ADMIN_EMAIL);

  return user;
}

module.exports = {
  newUser
};
