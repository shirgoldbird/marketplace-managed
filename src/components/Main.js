import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation/Navigation';

class Main extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>
              <Link to="/">Exhibitor Management</Link>
            </h1>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col>
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Main;