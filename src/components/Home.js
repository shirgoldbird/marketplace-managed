import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Deadlines from '../components/Deadlines/Deadlines';

class Home extends Component {
  render() {
    const {
      user,
      isFetching,
      items
    } = this.props;

    return (
      <div id="homepage">
        <div>
          <h3>Welcome, {user.legalName.split(" ")[0]}!</h3>
          <p>Your application status is: {user.applicationStatus}</p>

          <Deadlines isFetching={isFetching} items={items} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

export default Home;