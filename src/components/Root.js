import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './Login/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
);

const Root = () => (
  <Router>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/protected">Some Inside Page</Link>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" render={() => (<h1>Hi!</h1>)} />
    </div>
  </Router>
);

export default Root;