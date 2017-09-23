const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const connection = require('./airtable');

const server = express();
const PORT_NUMBER = 8081;

const SESSION = {
  secret: 'goodbirbs',
  cookie: { secure: false },
  saveUninitialized: true,
  resave: true
};

const PROTECTED_PATHS = [
  '/protected'
];

const authenticationCheck = (req, res, next) => {
  // We shouldn't serve protected paths unless the session is authenticated
  if (PROTECTED_PATHS.includes(req.url) && (!req.session || !req.session.authenticated)) {
    res.status(403).json({
      message: 'unauthorized'
    });
    return;
  }
  // Move onto the next piece of middleware, if it exists
  next();
}

server.use(session(SESSION));
server.use(bodyParser.json());
server.use(authenticationCheck);


server.get('/', (req, res) => {
  res.send('Herrlo');
});


server.get('/protected', (req, res) => {
  res.send('Herrlo data!');
});


server.post('/login', (req, res) => {
  const { legalName, email, zipCode } = req.body;
  const loginFormula = `AND({Legal Name} = '${legalName}', {Email Address} = '${email}', {ZIP/Postal Code} = '${zipCode}')`;

  // TODO: figure out how to deal with allowing both vendors and artists to log in before the tables are combined
  // maybe we just don't let artists log in before they're selected for AA and we add them to a central "Exhibitor" table
  connection('Vendors').select({
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
      req.session.authenticated = true;
      req.session.user = records[0];
      res.json({
        user: req.session.user
      });
    }
  });
});

server.post('/logout', (req, res) => {
  req.session.authenticated = false;
  delete req.session.user;

  res.json({
    user: undefined
  });
});


server.listen(PORT_NUMBER);
console.log(`Listening on port ${PORT_NUMBER}`);

module.exports = server;