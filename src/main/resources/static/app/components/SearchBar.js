import React from 'react';

import InputGroup from '../containers/InputGroup.js'
import ButtonInputGroup from '../containers/ButtonInputGroup.js'
import TextInput from '../elements/TextInput.js'
import Button from '../elements/Button.js'

const SearchBar = (props) => {
    return (
        <InputGroup>
            <TextInput />
            <ButtonInputGroup>
                <Button icon="glyphicon-plus-sign" />
            </ButtonInputGroup>
        </InputGroup>
    );
};

export default SearchBar;
