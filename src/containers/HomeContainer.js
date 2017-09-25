import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchDeadlines } from '../actions/deadlineActions';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchDeadlines();
  }
  render() {
    const {
      isAuthenticated,
      user,
      isFetching,
      items
    } = this.props;

    return (
      <Home 
        isAuthenticated={isAuthenticated}
        user={user}
        isFetching={isFetching}
        items={items} />
    );
  }
}

HomeContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  fetchDeadlines: PropTypes.func.isRequired
};

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

function mapDispatchToProps(dispatch) {
  return {
    fetchDeadlines: () => dispatch(fetchDeadlines())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);