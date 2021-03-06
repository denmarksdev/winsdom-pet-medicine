import React from 'react';
import BaseComponent from './BaseComponent';
import { FaPlus } from 'react-icons/fa'

import {
    Card,
    Form,
    Col,
    Button,
} from 'react-bootstrap'

import FormRadio from './FormRadio';

const ageGroup = [
    {label:'kid', value:1},
    {label:'Adult', value:2},
    {label:'Old', value:3}
]

export default class AddAppointments extends BaseComponent {

    state = {
        apt: {
            petName: '',
            ownerName: '',
            aptNotes: '',
            aptDate: '',
            ageGroup:1
        },
        aptDate: '',
        aptTime: ''
    }

    onSubmit = event => {

        event.preventDefault();
        const { apt, aptDate, aptTime } = this.state;
        apt.aptDate = `${aptDate} ${aptTime}`

        try {
            this.validate(apt);
            this.props.addAppointment(apt)
            this.setState({
                apt: {
                    petName: '',
                    ownerName: '',
                    aptNotes: '',
                    aptDate: '',
                    ageGroup:1,
                },
                aptDate: '',
                aptTime: ''
            })

        } catch (error) {
            alert(error.message)
        }
    }

    validate(apt) {
        if (!apt.petName)
            throw new Error('Invalid Pet Name');
        if (!apt.ownerName)
            throw new Error('Invalid Owner name');
        if (!apt.aptNotes)
            throw new Error('Invalid Appointment');

        const resultDate =  new Date (apt.aptDate ) 
        if (resultDate.toString() === 'Invalid Date')    
            throw new Error('Invalid Date');
    }

    render() {
        const { formDisplay, toggleForm } = this.props;
        const { apt, aptDate, aptTime } = this.state;
        return (
            <Card className='mt-3'>
                <Card.Header className='bg-primary text-white apt-addheading'
                    onClick={toggleForm} >
                    <FaPlus />   Add Appointment
                </Card.Header>
                <Card.Body className={
                    formDisplay ? '' : 'add-appointment'
                }>
                    <Form noValidate onSubmit={this.onSubmit}   >
                        <Form.Row>
                            <Col sm={10}>
                                <Form.Group >
                                    <Form.Label htmlFor='petName' >
                                        Pet Name
                                </Form.Label>
                                    <Form.Control
                                        value={apt.petName}
                                        onChange={this.onChange('apt.petName')}
                                        type='text'
                                        name='petname'
                                        placeholder="Pet's Name" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={10}>
                                <Form.Group  >
                                    <Form.Label htmlFor='ownerName' >
                                        Pet Owner
                                    </Form.Label>
                                    <Form.Control
                                        value={apt.ownerName}
                                        onChange={this.onChange('apt.ownerName')}
                                        type='text'
                                        name='ownerName'
                                        placeholder="Owner's Name" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={4}>
                                <Form.Group  >
                                    <Form.Label htmlFor='aptDate' >
                                        Date
                                    </Form.Label>
                                    <Form.Control
                                        value={aptDate}
                                        onChange={this.onChange('aptDate')}
                                        type='date'
                                        name='aptDate' />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={4}>
                                <Form.Group  >
                                    <Form.Label htmlFor='aptTime' >
                                        Time
                                    </Form.Label>
                                    <Form.Control
                                        value={aptTime}
                                        onChange={this.onChange('aptTime')}
                                        type='time'
                                        name='aptTime' />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={10}>
                                <Form.Group  >
                                    <Form.Label htmlFor='aptNotes' >
                                        Apt. Notes
                                    </Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        value={apt.aptNotes}
                                        onChange={this.onChange('apt.aptNotes')}
                                        placeholder="Appointmet Notes"
                                        rows='3'
                                        name='aptTime' />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                         </Form.Row>
                           <Col sm={12} >
                                <FormRadio 
                                    label='Range Group'
                                    items={ageGroup} 
                                    value={apt.ageGroup}
                                    onClick={ value=> this.onChangeValue('apt.ageGroup', Number(value)) }
                                    />
                           </Col>
                        <Form.Row>
                            <Col md={10} className='d-flex flex-row-reverse'  >
                                <Form.Group>
                                    <Button type='submit' variant='primary'>
                                        Add appointment
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}