import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
    return (
      <Nav bsStyle="tabs" activeKey={this.state.selected} onSelect={this.handleSelect}>
        <LinkContainer to="/login">
          <NavItem>
            Login
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/home">
          <NavItem>
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/protected">
          <NavItem>
            My Application
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/foo">
          <NavItem>
            Exhibitor Portal
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/bar">
          <NavItem>
            Contact Us
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}

export default Navigation;
