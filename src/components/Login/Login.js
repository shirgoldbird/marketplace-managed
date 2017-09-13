import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <form className="Login">
        <input type="text" placeholder="Legal name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;