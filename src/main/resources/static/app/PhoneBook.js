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
            contacts: []
        }
    };

    componentDidMount() {
        var self = this;

        var api = new ContactsApi();
        api.list()
            .then((data) => self.setState({ contacts: data}));
    }

    render() {
        return <div>
            <NavBar>
                <SearchBar />
            </NavBar>
            <ResponsiveContainer>
                <SearchResult results={ this.state.contacts } />
            </ResponsiveContainer>
            <ModalDialog title="Gustavo Di Domenico" modal="contact-profile">
                <ContactProfile />
            </ModalDialog>
            <ModalDialog title="Add new contact" modal="contact-management">
                <ContactManagement />
            </ModalDialog>
        </div>
    };
}

refreshReact();