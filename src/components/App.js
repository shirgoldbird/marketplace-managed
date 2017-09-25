import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation/Navigation';

const App = ({...props}) => (
  <Grid>
    <Row>
      <Col>
        <Navigation />
      </Col>
    </Row>
    <Row>
      <Col>
        {React.cloneElement({ ...props }.children, { ...props })}
      </Col>
    </Row>
  </Grid>
);

export default App;