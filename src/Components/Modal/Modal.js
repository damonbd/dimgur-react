import React, { Component } from 'react';

import './Modal.css'

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: props.modal
        }
    }

    setDisplay = () => {
        var modal = { ...this.state.modal };
        modal.isOpen = !modal.isOpen;

        this.props.visibilityHandler(modal);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps != null) {
            this.setState({ modal: nextProps.modal });
        }
    }

    render() {
        let modal = null;

        if (this.state.modal.isOpen) {
            modal = (
                <div>
                    <div onClick={this.setDisplay} className="modal-overlay"></div>
                    <div className="modal">
                        <div className="modal-header">
                            {this.state.modal.title}
                            <button onClick={this.setDisplay} type="button" data-dismiss="modal" aria-label="Close" className="close">
                                <span style={{ color: "#f2f2f2" }} aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body modal-center">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {modal}
            </div>
        );
    }
}

export default Modal;