import React from 'react';

import InputGroup from '../containers/groups/InputGroup'

import Label from '../elements/Span.js'
import TextInput from '../elements/TextInput.js'

const PhoneField = (props) => {
    return (
        <InputGroup customClasses="ml-bottom-10">
            <Label text={ props.label }></Label>
            <TextInput customClasses="text-right"
                       placeHolder="ex: +55 (54) 99625 3909"
                       value={ props.value }
                       onChange={ (text) => props.onChange(text) }
                       maxLength="30"
            />
        </InputGroup>
    );
};

export default PhoneField;
