import React, { Component } from 'react';

import '../Authentication.css'

interface ISignOutProps {
    signOutHandler: Function;
    toasterHandler: Function;
}

class SignOut extends Component<ISignOutProps> {
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
                <div className="auth-form-button-group">
                    <button onClick={this.signOutClick} className="btn btn-success auth-submit"> Sign Out </button>
                </div>
            </div >
        );
    }
}

export default SignOut;