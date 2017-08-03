import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'

import Button from '../elements/Button.js'

const SearchResult = (props) => {
    const contacts = (letter) => {
        return (props.results[letter].map(contact => {
            return (
                <Row hasBorder={ true }>
                    <Column>
                        <div className="pull-left contact-name">
                            <a onClick={ () => props.onContactClick(contact) }>
                                { contact.firstName } { contact.lastName }
                            </a>
                        </div>
                        <div className="pull-right">
                            <Button icon="glyphicon-minus-sign" onClick={ () => props.onContactRemoveClick(contact) }/>
                        </div>
                    </Column>
                </Row>
            )
        }));
    };

    return (
        <ResponsiveContainer>
            { Object.keys(props.results).map(letter => {
                return (
                    <div>
                        <Row hasBorder={ true }>
                            <Column>
                                <div className="pull-left contact-letter"> { letter }</div>
                            </Column>
                        </Row>
                        { contacts(letter) }
                    </div>
                )
            })}
        </ResponsiveContainer>
    );
};

export default SearchResult;
