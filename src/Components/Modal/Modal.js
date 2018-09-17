import React, { Component } from 'react';

import './Modal.css'

class modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    show = () => {
        this.setState({ isOpen: true });
    }

    hide = () => {
        this.setState({ isOpen: false });
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="backgroundColor">
                <button onClick={this.show} className="btn btn-primary"> Show Modal </button>
                {modal}
            </div>
        );
    }
}

export default modal;