import React, { Component } from 'react';
import '../css/App.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <Container>
          <Row>
            <Col md={12} className='bg-white' >
              <Container>
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;
