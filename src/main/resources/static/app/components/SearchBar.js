import React from 'react';

import InputGroup from '../containers/groups/InputGroup.js'
import ButtonInputGroup from '../containers/groups/ButtonInputGroup.js'
import TextInput from '../elements/TextInput.js'
import Button from '../elements/Button.js'

const SearchBar = (props) => {
    return (
        <InputGroup>
            <TextInput placeHolder="Search..." onChange={ (text) => props.OnSearchChange(text) } />
            <ButtonInputGroup>
                <Button icon="glyphicon-plus-sign" onClick={ () => props.onAddContactClick() }/>
            </ButtonInputGroup>
        </InputGroup>
    );
};

export default SearchBar;
