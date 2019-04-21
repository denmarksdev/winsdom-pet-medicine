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

  state = {
    appointments: []
  }

  componentDidMount() {

    fetch('./data.json')
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }))
      .catch(error => console.log(error))
  }

  render() {
    const { appointments } = this.state

    return (
      <main className="page bg-white" id="petratings">
        <Container>
          <Row>
            <Col md={12} className='bg-white' >
              <Container>
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments appointments={appointments} />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

}

export default App;
