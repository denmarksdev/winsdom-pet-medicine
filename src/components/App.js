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

import { without } from 'lodash'

class App extends Component {

  state = {
    appointments: [],
    formDisplay: false
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }))
      .catch(error => console.log(error))
  }

  onDeleteAppointment = item => {
    let { appointments } = this.state;
    appointments = without(appointments, item)
    this.setState({ appointments })
  }

  onAddAppointment = apt => {
    let { appointments } = this.state;
    appointments.unshift(apt)
    this.setState({appointments, formDisplay:false})
  }

  onToggleForm = ()=> {
    this.setState({ formDisplay: !this.state.formDisplay })
  }

  render() {
    const { appointments, formDisplay } = this.state
    return (
      <main className="page bg-white" id="petratings">
        <Container>
          <Row>
            <Col md={12} className='bg-white' >
              <Container>
                <AddAppointments
                  toggleForm={ this.onToggleForm}
                  addAppointment={this.onAddAppointment}
                  formDisplay={formDisplay} />
                <SearchAppointments />
                <ListAppointments
                  deleteAppointment={this.onDeleteAppointment}
                  appointments={appointments} />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

}

export default App;
