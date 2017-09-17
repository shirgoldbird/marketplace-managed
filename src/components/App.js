import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import Main from './Main';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;