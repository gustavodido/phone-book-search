import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top bg-blue no-margin">
            <div className="container-fluid">
                <div className="navbar-header">
                    { props.children }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
