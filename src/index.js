import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import LoginPage from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const sampleGenerator = (name) => {
  return () => (
    <h1>{name}</h1>
  );
};

const Home = sampleGenerator('Home');
const Protected = sampleGenerator('Protected');

const router = (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/protected" component={Protected} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
registerServiceWorker();