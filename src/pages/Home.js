import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    const user = this.props.auth.user;

    return (
      <div id="homepage">
        {isAuthenticated && (
          <div>
            <p>Welcome, {user.legalName.split(" ")[0]}!</p>
            <p>Your application status is: {user.applicationStatus}</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(HomePage);
