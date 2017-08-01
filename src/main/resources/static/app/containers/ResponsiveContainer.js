import React from 'react';

const ResponsiveContainer = (props) => {
    return (
        <div className="container-fluid">
            { props.children }
        </div>
    );
};

export default ResponsiveContainer;
