import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )} />
);

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated } = auth;

  return {
    isAuthenticated
  };
}

export default connect(mapStateToProps)(PrivateRoute);
