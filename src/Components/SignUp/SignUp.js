import React, { Component } from 'react';

import Toaster from '../Toaster/Toaster';

import './SignUp.css'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    signUpClick = () => {
        // fake an ajax call
        
        this.props.toasterHandler(true, true, "You have signed up!");
    }

    render() {
        return (
            <div>
                <div className="signUp-form">
                    <input type="text" maxLength="255" id="username" placeholder="Username" className="signUp-input" />
                    <input type="text" maxLength="255" id="email" placeholder="Email" className="signUp-input" />
                    <input type="password" maxLength="255" id="password" placeholder="Password" className="signUp-input" />
                    <input type="password" maxLength="255" id="confirmPassword" placeholder="Retype Password" className="signUp-input" />
                </div>
                <div className="signUp-form-button-group">
                    <button onClick={this.signUpClick} className="btn btn-primary signUp-submit"> Submit </button>
                </div>
            </div>
        );
    }
}

export default SignUp;