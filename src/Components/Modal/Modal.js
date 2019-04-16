import React, { Component } from 'react';

import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.modal
        }

        this.keyboardPress = this.keyboardPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.keyboardPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.keyboardPress);
    }

    keyboardPress(event) {
        event.preventDefault();

        if (event.keyCode == 27) {
            this.setDisplay(false);
        }
    }

    setDisplay(isOpen) {
        // gets around proxy parameter issue, not sure how to fix
        // keyup is somehow culprit
        if (isOpen != true || isOpen != false) {
            isOpen = false;
        }
            var modal = { ...this.state.modal };
            modal.isOpen = isOpen != null ? isOpen : !modal.isOpen;

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
                    <div onClick={this.setDisplay.bind(this)} className="modal-overlay"></div>
                    <div className="modal">
                        <div className="modal-header">
                            {this.state.modal.title}
                            <button onClick={this.setDisplay.bind(this)} type="button" data-dismiss="modal" aria-label="Close" className="close">
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