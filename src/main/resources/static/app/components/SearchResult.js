import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'

import Button from '../elements/Button.js'

const SearchResult = (props) => {
    return (
        <ResponsiveContainer>
            <Row hasBorder={ true }>
                <Column>
                    <div className="pull-left contact-letter">D</div>
                </Column>
            </Row>
            <Row hasBorder={ true }>
                <Column>
                    <div className="pull-left contact-name">
                        <a href="#contact-profile" data-toggle="modal">Daniela Krizysmiky</a></div>
                    <div className="pull-right">
                        <Button icon="glyphicon-minus-sign" />
                    </div>
                </Column>
            </Row>
        </ResponsiveContainer>
    );
};

export default SearchResult;
