import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './Navigation.css';

const LoggedOutView = (props) => {
  return (
    <Nav {...props} pullRight>
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
  return [
      <Nav key="mainNav" {...rest}>
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
      </Nav>,
      <Nav key="logout" pullRight>
        <NavItem onClick={logout}>
          Log Out
        </NavItem>
      </Nav>
  ];
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
    const { isAuthenticated, logout } = this.props;

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
                logout={logout} />
            ) : (
              <LoggedOutView />
            )
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default Navigation;