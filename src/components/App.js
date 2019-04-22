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
    formDisplay: false,
    orderBy: 'petName',
    orderDir: 'asc',
    queryText: '',
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
    this.setState({ appointments, formDisplay: false })
  }

  onChangeOrder = (orderBy, orderDir) => {
    this.setState({
      orderBy,
      orderDir
    })
  }

  onToggleForm = () => {
    this.setState({ formDisplay: !this.state.formDisplay })
  }

  onUpdateInfo = (property, value, item) => {
    let { appointments } = this.state;
    let aptIndex = appointments.indexOf(item);
    if (aptIndex === -1) return;

    appointments[aptIndex][property] = value
    this.setState({ appointments })
  }

  onSearchApts = queryText => {
    this.setState({ queryText })
  }

  render() {
    const {
      appointments,
      formDisplay,
      orderBy,
      orderDir,
    } = this.state

    let fiterApts = this.filterApt(appointments, orderBy);

    return (
      <main className="page bg-white" id="petratings">
        <Container>
          <Row>
            <Col md={12} className='bg-white' >
              <Container>
                <AddAppointments
                  toggleForm={this.onToggleForm}
                  addAppointment={this.onAddAppointment}
                  formDisplay={formDisplay} />
                <SearchAppointments
                  orderBy={orderBy}
                  orderDir={orderDir}
                  changeOrder={this.onChangeOrder}
                  searchApts={this.onSearchApts} />
                <ListAppointments
                  deleteAppointment={this.onDeleteAppointment}
                  appointments={fiterApts}
                  updateInfo={this.onUpdateInfo} />
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

  filterApt(appointments, orderBy) {
    const { orderDir, queryText } = this.state

    let order;
    let filteredApts = appointments;
    if (orderDir === 'asc') {
      order = 1;
    }
    else {
      order = -1;
    }
    filteredApts = filteredApts.sort((a, b) => {
      if (a[orderBy].toLowerCase() <
        b[orderBy].toLowerCase()) {
        return -1 * order;
      }
      else {
        return 1 * order;
      }
    }).filter(item => {
      return (
        item.petName
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase())
        ||
        item.ownerName
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase())
        ||
        item.aptNotes
          .toLowerCase()
          .includes(queryText.toLocaleLowerCase())
      )

    });

    return filteredApts;
  }
}

export default App;
