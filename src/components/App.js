import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';
import Footer from './Footer';

const App = ({...props}) => (
  <Grid>
    <Row>
      <Col>
        <NavigationContainer />
      </Col>
    </Row>
    <Row>
      <Col>
        {React.cloneElement({ ...props }.children, { ...props })}
      </Col>
    </Row>
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Grid>
);

export default App;