import React from 'react';

const Button = (props) => {
    return (
        <button type="button" className="btn btn-default" aria-label="Help" data-toggle="modal"
                data-target="#addModal"><span className={ "glyphicon " +  props.icon }></span></button>
    );
};

export default Button;