import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './containers/NavBar.js';
import ResponsiveContainer from './containers/ResponsiveContainer.js';
import ModalDialog from './containers/ModalDialog.js';

import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import ContactProfile from './components/ContactProfile.js';
import ContactManagement from './components/ContactManagement.js';

import ContactsApi from './api/ContactsApi';

const refreshReact = () => {
    ReactDOM.render(
        <PhoneBook />,
        document.getElementById('phone-book')
    );
};

class PhoneBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            selectedContact: { }
        }
    };

    componentDidMount() {
        this.refreshSearchResults();
    }

    refreshSearchResults() {
        var self = this;
        var api = new ContactsApi();
        api.list()
            .then((data) => self.setState({contacts: data}));
    }

    handleOnContactClick(contact) {
        var newState = {
            contacts: this.state.contacts,
            selectedContact: contact
        };
        this.setState(newState);

        $("#contact-profile").modal();
    }

    handleOnContactRemoveClick(contact) {
        var self = this;
        var api = new ContactsApi();
        api.remove(contact.uuid)
            .then((response) => self.refreshSearchResults());
    }

    render() {

        return <div>
            <NavBar>
                <SearchBar />
            </NavBar>
            <ResponsiveContainer>
                <SearchResult results={ this.state.contacts }
                              onContactClick={ (contact) => this.handleOnContactClick(contact) }
                              onContactRemoveClick = { (contact) => this.handleOnContactRemoveClick(contact) }
                />
            </ResponsiveContainer>
            <ModalDialog title={ this.state.selectedContact.fullName } modal="contact-profile">
                <ContactProfile contact={ this.state.selectedContact }/>
            </ModalDialog>
            <ModalDialog title="Add new contact" modal="contact-management">
                <ContactManagement />
            </ModalDialog>
        </div>
    };
}

refreshReact();