import React from 'react';

const Button = (props) => {
    const buttonBody = props.icon ?
        <span className={ "glyphicon " +  props.icon }></span> :
        props.text;

    const cssClass = props.customClasses ?
        "btn " + props.customClasses :
        "btn btn-default";

    return (
        <button type="button"
                className={ cssClass }
                onClick={() => props.onClick() }>

            { buttonBody }
        </button>
    );
};

export default Button;