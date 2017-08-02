import React from 'react';

const Panel = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">{ props.title }</div>
            <div className="panel-body">
                { props.children }
            </div>
        </div>
    );
};

export default Panel;
