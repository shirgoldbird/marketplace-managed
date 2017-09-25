import { connect } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import { logout } from '../actions/authActions';

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated } = auth;

  return {
    isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
