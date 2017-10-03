const express = require('express');
const router = express.Router();

const connection = require('../airtable');
const mapColumns = require('../utils/mapColumns');
const user = require('../utils/user');

router.post('/login', (req, res) => {
  const { legalName, email, zipCode } = req.body;
  const loginFormula = `
    AND({Legal Name} = '${legalName}', 
    {Email Address} = '${email}', 
    {ZIP Code} = '${zipCode}')
  `;

  // TODO: figure out how to deal with allowing both vendors and artists to log in before the tables are combined
  // maybe we just don't let artists log in before they're selected for AA and we add them to a central "Exhibitor" table
  connection('Auth').select({
    filterByFormula: loginFormula,
    maxRecords: 1
  }).firstPage((err, records) => {
    if (err) {
      res.status(500).json({
        message: err
      });
    }
    else if (!records.length) {
      res.status(500).json({
        message: 'Login failed, try again'
      });
    } 
    else {
      var u = user.newUser(mapColumns(records[0].fields, 'auth'));
      if(!user.hasPerm(u, user.PERM.LOGIN)) {
        res.status(403).json({
          message: "You are not permitted to " + user.PERM.LOGIN,
        });
      } else {
        req.session.authenticated = true;
        req.session.user = u;
        res.json({
          user: req.session.user
        });
      }
    }
  });
});

router.post('/logout', (req, res) => {
  req.session.authenticated = false;
  delete req.session.user;

  res.json({
    user: {}
  });
});

module.exports = router;
