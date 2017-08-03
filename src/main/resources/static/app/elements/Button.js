import React from 'react';

const Button = (props) => {
    return (
        <button type="button" className="btn btn-default" aria-label="Help" onClick={() => props.onClick() }>
            <span className={ "glyphicon " +  props.icon }></span>
        </button>
    );
};

export default Button;