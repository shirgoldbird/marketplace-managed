const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');

const authMiddleware = require('./authMiddleware');
const auth = require('./controllers/auth');
const documents = require('./controllers/documents');
const deadlines = require('./controllers/deadlines');

const app = express();
const PORT_NUMBER = 8081;

const SESSION = {
  secret: 'goodbirbs',
  cookie: { secure: false },
  saveUninitialized: true,
  resave: true
};

// Middleware
app.use(session(SESSION));
app.use(bodyParser.json());
app.use(authMiddleware);

// Routes
app.use('/auth', cors(), auth);
app.use('/documents', cors(), documents);
app.use('/deadlines', cors(), deadlines);

const server = app.listen(PORT_NUMBER, () => {
  const { port } = server.address();

  console.log(`Marketplace Managed API listening to port ${port}`);
});

module.exports = server;