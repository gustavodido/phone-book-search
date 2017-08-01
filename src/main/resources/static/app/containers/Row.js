import React from 'react';

const Row = (props) => {
    return (
        <div className="row border-color">
            { props.children }
        </div>
    );
};

export default Row;
