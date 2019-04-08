import React, { Component } from 'react';

import '../Modal/Modal.css'

class ImageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            image: props.children.props.src
        }
    }

    show = () => {
        this.setState({ isOpen: true });
    }

    hide = () => {
        this.setState({ isOpen: false });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps != null && nextProps.isOpen != null) {
            this.setState({ isOpen: nextProps.isOpen });
        }

        if (nextProps != null && nextProps.image != null) {
            this.setStrate({ image: nextProps.image});
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
                <img onClick={this.show} src={this.state.image} className=""></img>
                {modal}
            </div>
        );
    }
}

export default ImageModal;