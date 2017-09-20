import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 1 };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({ selected: selectedKey });
  }

  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;

    return (
      <Nav bsStyle="tabs" activeKey={this.state.selected} onSelect={this.handleSelect}>
        {!isAuthenticated && (
          <LinkContainer to="/login">
            <NavItem>
              Login
            </NavItem>
          </LinkContainer>
        )}
        {isAuthenticated && (
          <LinkContainer to="/home">
            <NavItem>
              Home
            </NavItem>
          </LinkContainer>
        )}
        {isAuthenticated && (
          <LinkContainer to="/protected">
            <NavItem>
              My Application
            </NavItem>
          </LinkContainer>
        )}
        {isAuthenticated && (
          <LinkContainer to="/portal">
            <NavItem eventKey={4}>
              Exhibitor Portal
            </NavItem>
          </LinkContainer>
        )}
        {isAuthenticated && (
          <LinkContainer to="/contact">
            <NavItem eventKey={5}>
              Contact Us
            </NavItem>
          </LinkContainer>
        )}
        {isAuthenticated && (
          <LinkContainer to="/logout">
            <NavItem>
              Log Out
            </NavItem>
          </LinkContainer>
        )}
      </Nav>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(Navigation);
