import React from 'react';

const ModalDialogFooter = (props) => {
    return (
        <div className="modal-footer">
            { props.children }
        </div>
    );
};

export default ModalDialogFooter;
