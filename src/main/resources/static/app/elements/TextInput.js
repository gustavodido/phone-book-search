import React from 'react';

const TextInput = (props) => {
    return (
        <input type="text"
               className={"form-control " + props.customClasses }
               placeholder={ props.placeHolder}
               id={ props.id }
               onChange={ (e) => props.onChange(e.target.value) }
        />
    );
};

export default TextInput;
