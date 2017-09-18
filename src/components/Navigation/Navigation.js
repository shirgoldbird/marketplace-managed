import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

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
        <NavItem eventKey={1} href="/home">Home</NavItem>
        <NavItem eventKey={2} title="Item">My Application</NavItem>
        <NavItem eventKey={3} title="Portal">Exhibitor Portal</NavItem>
        <NavItem eventKey={4} title="Help">Contact Us</NavItem>
      </Nav>
    );
  }
}

export default Navigation;
