import React, { Component } from 'react';
import $ from 'jquery';

import './Toaster.css'

class Toaster extends Component {
    constructor(props) {
        super(props);
    }

    hide = () => {
        this.setState({ isVisible: false });
    }

    render() {

        let backgroundColor = "background-error";
        if (this.props.isSuccess) {
            backgroundColor = "background-success";
        }

        return (
                <div onClick={this.hide} className={backgroundColor + " " + "toaster"}>
                    <div className="toaster-body">
                        {this.props.body}
                        {this.props.isSuccess}
                    </div>
                </div>
        );
    }
}

export default Toaster;
