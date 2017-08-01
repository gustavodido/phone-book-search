import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './containers/NavBar.js';
import ResponsiveContainer from './containers/ResponsiveContainer.js';
import Row from './containers/Row.js';
import Column from './containers/Column.js';
import ModialDialog from './containers/ModalDialog.js';

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
            <NavBar />
            <ResponsiveContainer>
                <Row>
                    <Column>
                        Body
                    </Column>
                </Row>
            </ResponsiveContainer>
            <ModialDialog />
        </div>
    };
}

refreshReact();