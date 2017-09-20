import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import Main from './Main';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
