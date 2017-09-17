import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';

const Sample = () => (
  <h1>Private!</h1>
);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <PrivateRoute exact path="/" component={Sample} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Sample} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
registerServiceWorker();