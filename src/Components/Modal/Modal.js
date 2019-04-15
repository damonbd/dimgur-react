import React, { Component } from 'react';

import './Modal.css'

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isOpen: false
        }
    }

    show = () => {
        this.props.visibilityHandler(this.state.name, true);
    }

    hide = () => {
        this.props.visibilityHandler(this.state.name, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps != null) {
            this.setState({ isOpen: nextProps.isOpen });
        }
    }

    render() {
        let modal = null;

        if (this.state.isOpen) {
            modal = (
                <div>
                    <div onClick={this.hide} className="modal-overlay"></div>
                    <div className="modal">
                        <div className="modal-header">
                            {this.props.title}
                            <button onClick={this.hide} type="button" data-dismiss="modal" aria-label="Close" className="close">
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
            <div className="">
                <button onClick={this.show} className="btn btn-primary"> {this.props.btnText != null ? this.props.btnText : "Show Modal"} </button>
                {modal}
            </div>
        );
    }
}

export default Modal;