import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavigationContainer from '../containers/NavigationContainer';

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
  </Grid>
);

export default App;