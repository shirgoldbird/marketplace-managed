import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeadlines } from '../actions/deadlineActions';
import Deadlines from '../components/Deadlines/Deadlines';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDeadlines());
  }
  render() {
    const {
      isAuthenticated,
      user,
      isFetching,
      items
    } = this.props;

    return (
      <div id="homepage">
        {isAuthenticated && (
          <div>
            <h3>Welcome, {user.legalName.split(" ")[0]}!</h3>
            <p>Your application status is: {user.applicationStatus}</p>

            <Deadlines isFetching={isFetching} items={items} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth, deadline } = state;

  const {
    isFetching,
    items
  } = deadline;

  const {
    isAuthenticated,
    user
  } = auth

  return {
    isFetching,
    items,
    isAuthenticated,
    user
  }
}

export default connect(mapStateToProps)(HomePage);
