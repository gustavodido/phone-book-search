import React from 'react';

const InputGroup = (props) => {
    return (
        <div className={"input-group " + props.customClasses}>
            { props.children }
        </div>
    );
};

export default InputGroup;
