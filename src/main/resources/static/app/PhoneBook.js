import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './containers/NavBar.js';
import ResponsiveContainer from './containers/ResponsiveContainer.js';
import ModalDialog from './containers/modal/ModalDialog.js';
import Group from './containers/groups/Group.js';

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
            rawContacts: [],
            contacts: {},
            selectedContact: {},
        }

        this.searchTerm = "";
    };

    componentDidMount() {
        this.refreshSearchResults();
    }

    refreshSearchResults() {
        var self = this;
        var api = new ContactsApi();

        api.list()
            .then((data) => self.setState({rawContacts: data }))
            .then(() => self.filterSearchResults());
    }

    filterSearchResults() {
        const regEx = new RegExp(this.searchTerm, 'i');

        const filteredContacts = this.state.rawContacts
            .filter(contact => regEx.test(contact.fullName));

        var api = new ContactsApi();
        this.setState({contacts: api.transform(filteredContacts)});
    }

    handleOnContactClick(contact) {
        this.setState({ selectedContact: contact });
        $("#contact-profile").modal();
    }

    handleOnContactRemoveClick(contact) {
        var self = this;
        var api = new ContactsApi();
        api.remove(contact.uuid)
            .then((response) => self.refreshSearchResults());
    }

    handleOnAddContactClick() {
        this.setState({ selectedContact: {} });
        $("#contact-management").modal();
    }

    handleOnEditButtonClick() {
        $("#contact-management").modal();
    }

    handleOnSaveContactClick(contact) {
        var self = this;
        var api = new ContactsApi();
        api.save(contact)
            .then((response) => self.refreshSearchResults());
    }

    handleOnSearchChange(text) {
        this.searchTerm = text;
        this.filterSearchResults();
    }

    render() {
        return (
            <Group>
                <NavBar>
                    <SearchBar onAddContactClick = { () => this.handleOnAddContactClick() }
                               OnSearchChange={ (text) => this.handleOnSearchChange(text) }/>
                </NavBar>
                <ResponsiveContainer>
                    <SearchResult results={ this.state.contacts }
                                  onContactClick={ (contact) => this.handleOnContactClick(contact) }
                                  onContactRemoveClick={ (contact) => this.handleOnContactRemoveClick(contact) }/>
                </ResponsiveContainer>
                <ModalDialog title={ this.state.selectedContact.fullName } modal="contact-profile">
                    <ContactProfile contact={ this.state.selectedContact }
                                    onEditButtonClick={ () => this.handleOnEditButtonClick() }/>
                </ModalDialog>
                <ModalDialog title="Contact Management" modal="contact-management">
                    <ContactManagement contact={ this.state.selectedContact }
                                       onSaveContactClick={ (contact) => this.handleOnSaveContactClick(contact) } />
                </ModalDialog>
            </Group>
        )
    };
}

refreshReact();