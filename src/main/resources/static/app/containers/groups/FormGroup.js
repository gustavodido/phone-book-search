import React from 'react';

const FormGroup = (props) => {
    return (
        <div className={"form-group " + props.customClasses}>
            { props.children }
        </div>
    );
};

export default FormGroup;
