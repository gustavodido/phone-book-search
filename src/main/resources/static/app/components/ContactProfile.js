import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'
import ModalDialogFooter from '../containers/modal/ModalDialogFooter.js'
import ModalDialogCloseButton from '../containers/modal/ModalDialogCloseButton.js'

import Button from '../elements/Button.js'

const ContactProfile = (props) => {

    const formatPhone = (phone, type, badge) => {
        if (phone) {
            return (
                <h5>
                    <span className={"label label-" + (badge || "default")}>
                        { type }
                    </span>
                    <a href={"tel:" + phone } className="ml-left-10">
                        { phone }
                    </a>
                </h5>
            );
        }
    };

    return (
        <ResponsiveContainer>
            <Row>
                <Column>
                    <div className="media">
                        <a className="pull-left" href="#">
                            <img className="media-object dp img-circle"
                                 src="https://gravatar.com/avatar/cd62d88a83461e0b1daa8f2fa31c4dcb?s=512&d=https://codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png"/>
                        </a>
                        <div className="media-body">
                            { formatPhone(props.contact.homePhone, "Home", "info") }
                            { formatPhone(props.contact.workPhone, "Work") }
                            { formatPhone(props.contact.mobilePhone, "Mobile") }
                        </div>
                    </div>
                </Column>
            </Row>
            <ModalDialogFooter>
                <ModalDialogCloseButton />
                <Button text="Edit"
                        customClasses="btn-primary"
                        onClick={ () => props.onEditButtonClick() } />
            </ModalDialogFooter>
        </ResponsiveContainer>
    );
};

export default ContactProfile;
