import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './containers/NavBar.js';
import ResponsiveContainer from './containers/ResponsiveContainer.js';
import ModalDialog from './containers/ModalDialog.js';

import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import ContactProfile from './components/ContactProfile.js';
import ContactManagement from './components/ContactManagement.js';


const refreshReact = () => {
    ReactDOM.render(
        <PhoneBook />,
        document.getElementById('phone-book')
    );
};

class PhoneBook extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return <div>
            <NavBar>
                <SearchBar />
            </NavBar>
            <ResponsiveContainer>
                <SearchResult />
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