import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'
import FormGroup from '../containers/groups/FormGroup.js'
import Panel from '../containers/Panel.js'
import ModalDialogFooter from '../containers/modal/ModalDialogFooter.js'
import ModalDialogCloseButton from '../containers/modal/ModalDialogCloseButton.js'

import Button from '../elements/Button.js'
import TextInput from '../elements/TextInput.js'

import PhoneField from './PhoneField.js'

class ContactManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            homePhone: "",
            workPhone: "",
            mobilePhone: ""
        }
    };

    render() {
        return (
            <ResponsiveContainer>
                <Row>
                    <Column size="6">
                        <FormGroup>
                            <label for="firstName">First name:</label>
                            <TextInput id="firstName"
                                       placeholder="ex: Gustavo"
                                       onChange={ (text) => this.setState({ firstName: text } ) }/>
                        </FormGroup>
                    </Column>
                    <Column size="6">
                        <FormGroup>
                            <label for="lastName">Last name:</label>
                            <TextInput id="lastName"
                                       placeholder="ex: Domenico"
                                       onChange={ (text) => this.setState({ lastName: text } ) }/>
                        </FormGroup>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Panel title="Phones">
                            <ResponsiveContainer>
                                <Column size="2"></Column>
                                <Column size="8">
                                    <PhoneField label="Home" onChange={ (text) => this.setState({ homePhone: text }) }/>
                                    <PhoneField label="Work"
                                                onChange={ (text) => this.setState({ workPhone: text } ) }/>
                                    <PhoneField label="Mobile"
                                                onChange={ (text) => this.setState({ mobilePhone: text } ) }/>
                                </Column>
                                <Column size="2"></Column>
                            </ResponsiveContainer>
                        </Panel>
                    </Column>
                </Row>
                <ModalDialogFooter>
                    <ModalDialogCloseButton />
                    <Button text="Save changes"
                            customClasses="btn-primary"
                            onClick={ () => this.props.onSaveContactClick(this.state) }/>
                </ModalDialogFooter>
            </ResponsiveContainer>
        );
    };
}

export default ContactManagement;
