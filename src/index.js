import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import Portal from './components/Portal/Portal';
import Contact from './components/Contact/Contact';
import PrivateRoute from './containers/PrivateRoute';

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
          <PrivateRoute exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portal" component={Portal} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
