import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import validate from 'validate.js';

import FormField from '../FormField';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legalName: '',
      email: '',
      zipCode: '',
      isLoading: false
    };

    this.stateValidation = {
      legalName: {
        presence: true
      },
      email: {
        email: true
      },
      zipCode: {
        length: {
          minimum: 5
        }
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();

    if (!validate(this.state, this.stateValidation)) {
      this.setState({
        isLoading: true
      });

      this.props.login(this.state).then((data) => {
        this.refs.form.reset();
        this.setState({
          isLoading: false
        });
      }).catch(() => {
        this.setState({
          isLoading: false
        });
      });
    }
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  checkValidation(prop) {
    const validation = validate(this.state, this.stateValidation);

    if (validation && validation[prop] && validation[prop].length) {
      return 'error';
    }

    return null;
  }

  render() {
    return (
      <form className="Login" ref="form" onSubmit={this.onSubmit} disabled={this.state.isLoading}>
        <FormField
          onChange={this.onChange}
          checkValidation={this.checkValidation.bind(this, 'legalName')}
          name="legalName"
          type="text"
          label="Legal name"
          placeholder="Sheva Goldberg" />
        <FormField
          onChange={this.onChange}
          checkValidation={this.checkValidation.bind(this, 'email')}
          name="email"
          type="email"
          label="Email Address"
          placeholder="example@gmail.com" />
        <FormField
          onChange={this.onChange}
          checkValidation={this.checkValidation.bind(this, 'zipCode')}
          name="zipCode"
          type="text"
          label="ZIP/Postal Code"
          placeholder="60606" />
        <Button
          type="submit">
          Login
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login;
