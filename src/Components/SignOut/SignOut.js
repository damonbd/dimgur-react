import React, { Component } from 'react';

import Toaster from '../Toaster/Toaster';

import '../SignUp/SignUp.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    signOutClick = () => {
        // imaginary ajax call
        let isValid = true;

        if (isValid) {
            this.props.toasterHandler(true, true, "Sign out successful.");

            // clear user
            this.props.signOutHandler("");
        }
        else {
            this.props.toasterHandler(true, false, "Unable to logout!");
        }
    }

    render() {
        return (
            <div>
                <div className="signUp-form-button-group">
                    <button onClick={this.signOutClick} className="btn btn-success signUp-submit"> Sign Out </button>
                </div>
            </div >
        );
    }
}

export default SignIn;