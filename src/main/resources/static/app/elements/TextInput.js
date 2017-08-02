import React from 'react';

const TextInput = (props) => {
    return (
        <input type="text"
               className={"form-control " + props.customClasses }
               placeholder={ props.placeHolder}/>
    );
};

export default TextInput;
