import React from 'react';
import ReactDOM from 'react-dom';

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
        return <div>Hello React.</div>
    }
}

refreshReact();