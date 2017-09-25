import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { login } from '../actions/authActions';

function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(login(data))
  }
}

export default connect(null, mapDispatchToProps)(Login);