const WHITELISTED_PATHS = [
  '/',
  '/auth/login',
  '/auth/logout'
];

module.exports = (req, res, next) => {
  // We shouldn't serve non-whitelisted paths unless the session is authenticated
  if (!WHITELISTED_PATHS.includes(req.url) && (!req.session || !req.session.authenticated)) {
    res.status(403).json({
      message: 'unauthorized'
    });
    return;
  }
  // Move onto the next piece of middleware, if it exists
  next();
}