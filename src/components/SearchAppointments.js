
import React from 'react';
import {
    Col,
    InputGroup,
    FormControl,
    Dropdown,
    DropdownButton
} from 'react-bootstrap'

export default class SearchAppointments extends React.Component {
    render() {
        const { orderBy, orderDir, changeOrder } = this.props

        return (
            <div className="search-appointments row justify-content-center my-4">
                <Col md={6}>
                    <InputGroup>
                        <FormControl
                            placeholder="Search appointments ..."
                            aria-label="Search Appointments" 
                            onChange={ e=> this.props.searchApts(e.target.value) }/>
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="primary"
                            title="Sort by:  "
                            id="input-group-dropdown-2"  >
                            <Dropdown.Item
                                active={orderBy === 'petName'}
                                href="#"
                                onClick={e => changeOrder('petName', orderDir)} >
                                Pet Name
                            </Dropdown.Item>
                            <Dropdown.Item
                                active={orderBy === 'aptDate'}
                                href="#"
                                onClick={e => changeOrder('aptDate', orderDir)} >
                                Date
                            </Dropdown.Item>
                            <Dropdown.Item
                                active={orderBy === 'ownerName'}
                                href="#"
                                onClick={e => changeOrder('ownerName', orderDir)} >
                                Owner
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item 
                                active={orderDir === 'asc'}
                                href="#"
                                onClick={e => changeOrder(orderBy, 'asc')} >
                                    Asc
                             </Dropdown.Item>
                            <Dropdown.Item 
                                active={orderDir === 'desc'} 
                                href="#"
                                onClick={e => changeOrder(orderBy, 'desc')} >
                                Desc
                            </Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
            </div>
        )
    }
}