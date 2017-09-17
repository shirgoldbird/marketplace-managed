import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Exhibitor Management</Link>
        </h1>
        <Link to="/protected">Protected</Link>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;