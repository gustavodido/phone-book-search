import React from 'react';

const Column = (props) => {
    const columnSize = props.size ? props.size : 12;
    return (
        <div className={"col-lg-" + columnSize + " custom-padding"}>
            { props.children }
        </div>
    );
};

export default Column;