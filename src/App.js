import React from 'react';
import './App.scss';

import { Container, Row } from 'react-bootstrap';

import Wrapper from './components/wrapper/index';

function App() {
  return (
    <Container fluid>
      <Row>
        <Wrapper/>
      </Row>
    </Container>
  );
}

export default App;
