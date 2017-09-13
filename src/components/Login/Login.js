import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();

    this.props.login(this.state).then(data => {

    });
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    return (
      <form className="Login" onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          name="name"
          type="text"
          placeholder="Legal name" />
        <input
          onChange={this.onChange}
          name="email"
          type="email"
          placeholder="Email Address" />
        <input
          onChange={this.onChange}
          name="phone"
          type="tel"
          placeholder="Phone Number" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default connect(null, { login })(Login);