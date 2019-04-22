import React, { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import {
    Table,
    Button,
    Alert
} from 'react-bootstrap'

export default class ListAppointments extends React.Component {

    render() {
        const { appointments } = this.props
        const withouAppointments = (appointments.length === 0)
        return (
            <Fragment>
                <h3 className='mt-3 mb-3 border-top pb-2' >Appointments</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='text-center' >Action</th>
                            <th>Pet information</th>
                            <th className='text-center' >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((item, i) =>
                                <tr key={i} >
                                    <td className='text-center' >
                                        <Button
                                            onClick={() => this.props.deleteAppointment(item)}
                                            variant='danger'
                                             className="pet-delete">
                                            <FaTimes />
                                        </Button>
                                    </td>
                                    <td>
                                        <span className="pet-name">{item.petName}</span>
                                        <div className="pet-info media-body">
                                            <div className="owner-name">
                                                <span className="label-item"><strong>Owner: </strong></span>
                                                <span>{item.ownerName} </span>
                                            </div>
                                            <div className="apt-notes">{item.aptNotes}</div>
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        <span className="apt-date ml-auto">
                                            <Moment
                                                date={item.aptDate}
                                                parse='YYYY-MM-dd hh:mm'
                                                format='MMM-D h:mma'
                                            />
                                        </span>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                {
                    withouAppointments &&
                    <Alert variant='danger' >No appointments found!</Alert>
                }
            </Fragment>
        )
    }
}