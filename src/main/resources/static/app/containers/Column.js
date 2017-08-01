import React from 'react';

const Column = (props) => {
    return (
        <div className="col-lg-12 custom-padding">
            { props.children }
        </div>
    );
};

export default Column;