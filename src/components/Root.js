import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/auth';
import Login from './Login/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )} />
);

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const Sample = () => (
  <h1>Hi!</h1>
);

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/protected">Some Inside Page</Link>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Sample} />
      </div>
    </Router>
  </Provider>
);

export default Root;