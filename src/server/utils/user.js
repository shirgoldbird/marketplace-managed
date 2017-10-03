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
  // Shallow copy the user object to avoid reference woes.
  // NB: Don't put any objects in here that you don't want sharing references.
  // Arrays are special-cased.
  var user = {};
  Object.keys(fields).map(key => {
    if(Array.isArray(fields[key])) {
      user[key] = fields[key].slice();
    } else {
      user[key] = fields[key];
    }
  });

  // Set defaults.
  if(user.permissions === undefined) user.permissions = [];

  // Create a permission set for faster lookups.
  user.perms = {};
  for(var i = 0; i < user.permissions.length; i++) {
    user.perms[user.permissions[i]] = true;
  }

  // Delete these keys both to avoid unnecessary traffic and to not reveal
  // useless information to the client.
  delete user.vendors;
  delete user.permissions;

  return user;
}

const PERM = {
  ROOT: 'Do Absolutely Everything',
  LOGIN: 'Login',
};

/* Check if a user has a permission.
 *
 * This, in particular, always succeeds if the user has the PERM.ROOT
 * permission.
 *
 * Param user should be an object as returned by newUser. Param perm should be
 * a permission string as it appears in Airtable (usually as one of the values
 * in the PERM object above).
 *
 * Returns a boolean, true if the user possesses that permission.
 *
 * Invalid users "possess" no permissions.
 */
function hasPerm(user, perm) {
  if(!user || typeof user !== 'object' || user.perms === undefined) return false;
  return (user.perms[PERM.ROOT] === true) || (user.perms[perm] === true);
}

module.exports = {
  newUser: newUser,
  hasPerm: hasPerm,
  PERM: PERM,
};
