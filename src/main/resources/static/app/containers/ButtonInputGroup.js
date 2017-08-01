import React from 'react';

const ButtonInputGroup = (props) => {
    return (
        <div className="input-group-btn">
            { props.children }
        </div>
    );
};

export default ButtonInputGroup;
