import React, { Component } from 'react';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(logout());
  }

  componentDidMount() {
    this.props.history.push('/login');
  }

  render () {
    return (<p>You have successfully logged out.</p>);
  }
};

export default connect()(Logout);
