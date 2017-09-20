import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';
import HomePage from './pages/Home';
import Portal from './components/Portal/Portal';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const sampleGenerator = (name) => {
  return () => (
    <h1>{name}</h1>
  );
};

const Protected = sampleGenerator('Protected');

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Redirect exact from="/" to="/home" />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portal" component={Portal} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
registerServiceWorker();
