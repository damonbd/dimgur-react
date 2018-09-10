import React, { Component } from 'react';
import { ReactDOM } from 'react-dom'
import './Toaster.css'
import $ from 'jquery';

class Toaster extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     setTimeout(function () {
    //         ReactDOM.unmountComponentAtNode($(".toaster"))

    //     }, 5000);
    // }

    //pops
    //hides
    //animations
    //stack multiple

    show = () => {
        this.setState({ isVisible: true });
    }

    hide = () => {
        this.setState({ isVisible: false });
    }

    render() {

        // setTimeout(function () {
        //     ReactDOM.unmountComponentAtNode($(".toaster"))

        // }, 5000);

        return (
            <div onClick={this.hide} className="toaster background-color">
                <p>TOASTER COMP</p>
                {/* className={this.state.backgroundColor} */}
                <div className="toaster">
                    <div className="toaster-body">
                        {this.props.body}
                        {this.props.isSuccess}

                        {/* this.props.body?? */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Toaster;
