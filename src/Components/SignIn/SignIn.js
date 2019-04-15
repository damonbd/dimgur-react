import React, { Component } from 'react';

import Toaster from '../Toaster/Toaster';

import '../SignUp/SignUp.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    signInClick = () => {
        // imaginary ajax call
        let isValid = true;

        if (isValid) {
            this.props.toasterHandler(true, true, "Sign in successful.");

            // rather than doing real auth, just set the user to a property
            this.props.signInHandler(this.state.username);
            this.props.modalHandler("signIn", false);
        }
        else {
            this.props.toasterHandler(true, false, "Error: Wrong credentials!");
        }
    }

    render() {
        return (
            <div>
                <div className="signUp-form">
                    <input type="text" value={this.state.username} onChange={this.handleInputChange} maxLength="255" id="username" name="username" placeholder="Username" className="signUp-input" />
                    <input type="password" value={this.state.password} onChange={this.handleInputChange} maxLength="255" id="password" name="password" placeholder="Password" className="signUp-input" />
                </div>
                <div className="signUp-form-button-group">
                    <button onClick={this.signInClick} className="btn btn-primary signUp-submit"> Submit </button>
                </div>
            </div>
        );
    }
}

export default SignIn;