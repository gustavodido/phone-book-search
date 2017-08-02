import React from 'react';

import ResponsiveContainer from '../containers/ResponsiveContainer.js'
import Row from '../containers/Row.js'
import Column from '../containers/Column.js'

const ContactProfile = (props) => {
    return (
       <ResponsiveContainer>
            <Row>
                <Column>
                    <div className="media">
                        <a className="pull-left" href="#">
                            <img className="media-object dp img-circle"
                                 src="http://ilp2017.iasbaba.com/wp-content/uploads/2016/08/blank_user_icon.png" />
                        </a>
                        <div className="media-body">
                            <h5>
                                <span className="label label-default">Home</span><a href="tel:85191490"> +55 (51)
                                85191490</a>
                            </h5>
                            <h5><span className="label label-info">Work</span><a href="tel:85191490"> +55 (51) 85191490</a>
                            </h5>
                            <h5><span className="label label-info">Cel</span><a href="tel:85191490"> +55 (51) 85191490</a>
                            </h5>
                        </div>
                    </div>
                </Column>
            </Row>
        </ResponsiveContainer>
    );
};

export default ContactProfile;
