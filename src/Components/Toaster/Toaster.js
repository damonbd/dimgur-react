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
        let backgroundColor = "toaster-background-error";
        if (this.props.isSuccess) {
            backgroundColor = "toaster-background-success";
        }

        let toaster = (
            <div onClick={this.hide} className={backgroundColor + " " + "toaster"}>
            <div className="toaster-body">
                {this.props.body}
                {this.props.isSuccess}
            </div>
        </div>
        )

        return (
            <div>
                {toaster}
            </div>
        );
    }
}

export default Toaster;
