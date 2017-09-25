import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/authActions';
import './Navigation.css';

const LoggedOutView = (props) => {
  return (
    <Nav {...props}>
      <LinkContainer to="/login">
        <NavItem eventKey={1}>
          Login
        </NavItem>
      </LinkContainer>
    </Nav>
  );
}

const LoggedInView = (props) => {
  const { 
    logout,
    ...rest
  } = props;
  return (
    <Nav {...rest}>
      <LinkContainer to="/protected">
        <NavItem eventKey={1}>
          My Application
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/portal">
        <NavItem eventKey={2}>
          Exhibitor Portal
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={3}>
          Contact Us
        </NavItem>
      </LinkContainer>
      <NavItem onClick={logout}>
        Log Out
      </NavItem>
    </Nav>
  )
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({
      selected: selectedKey
    });
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Marketplace Managed
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {
            isAuthenticated ? (
              <LoggedInView
                logout={this.props.logout} />
            ) : (
              <LoggedOutView />
            )
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

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
