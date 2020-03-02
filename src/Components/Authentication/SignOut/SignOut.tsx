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
                <a onClick={this.signOutClick} className="nav-link" href="#">Sign Out</a>
        );
    }
}

export default SignOut;