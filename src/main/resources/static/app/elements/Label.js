import React from 'react';

const Label = (props) => {
    return (
        <span className="input-group-addon min-size-100">{ props.text }</span>
    );
};

export default Label;
