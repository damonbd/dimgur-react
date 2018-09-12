import React, { Component } from 'react';
//import { ReactDOM } from 'react-dom'
import ReactDOM from 'react-dom';
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
    //     //ReactDOM.unmountComponentAtNode($(".toaster"))

    //     }, 2000);
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

        let backgroundColor = "background-error";
        if (this.props.toasterIsSuccess) {
            backgroundColor = "background-success";
        }

        // let toaster = null;

        // if (this.props.toasterIsSuccess) {
        //     toaster = (
        //         <div onClick={this.hide} className={backgroundColor + " " + "toaster"}>
        //             <div className="toaster-body">
        //                 {this.props.toasterBody}
        //                 {this.props.toasterIsSuccess}
        //             </div>
        //         </div>
        //     )
        // }

        // setTimeout(function () {
        //     ReactDOM.unmountComponentAtNode($(".toaster"))

        // }, 5000);

        return (
            // { toaster }
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
