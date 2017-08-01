import React from 'react';

const NavBar = (params) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top bg-blue no-margin">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="..." placeholder="Search..." />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-default" aria-label="Help" data-toggle="modal" data-target="#addModal"><span className="glyphicon glyphicon-plus-sign"></span></button>
                            </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
