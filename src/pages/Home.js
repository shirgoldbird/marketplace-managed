import React, { Component } from 'react';
import { connect } from 'react-redux';
import Deadlines from '../components/Deadlines/Deadlines';

class HomePage extends Component {
  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    const user = this.props.auth.user;

    return (
      <div id="homepage">
        {isAuthenticated && (
          <div>
            <h3>Welcome, {user.legalName.split(" ")[0]}!</h3>
            <p>Your application status is: {user.applicationStatus}</p>

            <Deadlines />
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(HomePage);
