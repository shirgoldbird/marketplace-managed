import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Exhibitor Management</Link>
        </h1>
        <Navigation />
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;