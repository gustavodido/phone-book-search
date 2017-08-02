import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'
import FormGroup from '../containers/groups/FormGroup.js'
import Panel from '../containers/Panel.js'

import PhoneField from './PhoneField.js'

const ContactManagement = (props) => {
    return (
        <ResponsiveContainer>
            <Row>
                <Column size="6">
                    <FormGroup>
                        <label for="exampleInputEmail1">First name:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="ex: Gustavo"/>
                    </FormGroup>
                </Column>
                <Column size="6">
                    <FormGroup>
                        <label for="exampleInputPassword1">Last name:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="ex: Domenico"/>
                    </FormGroup>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Panel title="Phones">
                        <ResponsiveContainer>
                            <Column size="2"></Column>
                            <Column size="8">
                                <PhoneField label="Home"/>
                                <PhoneField label="Work"/>
                                <PhoneField label="Mobile"/>
                            </Column>
                            <Column size="2"></Column>
                        </ResponsiveContainer>
                    </Panel>
                </Column>
            </Row>
        </ResponsiveContainer>
    );
};

export default ContactManagement;
