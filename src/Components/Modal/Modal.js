import React, { Component } from 'react';
//import './Components/Modal/Modal.css';
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

        console.log("btn press");
    }

    hide = () => {
        this.setState({ isOpen: false });
    }

    render() {


        let modal = null;

        if (this.state.isOpen) {
            modal = (
                <div>
                    <div className="modal-overlay"></div>

                    <div className="modal">
                        <div className="modal-header">
                            header1
                        </div>

                        <div className="modal-body">
                            body
                        </div>
                    </div>
                </div>

            )
        }

        return (


            <div className="backgroundColor">
                <button onClick={this.show} className="btn btn-primary"> Show Modal </button>


                <p>modal component</p>

                {modal}

                <p> end </p>

            </div>
        );
    }
}

export default modal;