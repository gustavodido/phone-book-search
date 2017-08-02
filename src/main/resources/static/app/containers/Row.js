import React from 'react';

const Row = (props) => {
    const borderClass = props.hasBorder ? "border-color" : ""
    return (
        <div className={"row " + borderClass}>
            { props.children }
        </div>
    );
};

export default Row;
