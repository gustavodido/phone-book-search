import React from 'react';

const ModalDialog = (props) => {
    return (
        <div className="modal fade" tabindex="-1" role="dialog" id={ props.modal }>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">{ props.title }</h4>
                    </div>
                    <div className="modal-body">
                        { props.children }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDialog;
