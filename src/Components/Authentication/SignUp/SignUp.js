import React, { Component } from 'react';

import '../Authentication.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            usernameError: "",
            emailError: "",
            passwordError: "",
            passwordConfirmError: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.keyboardPress = this.keyboardPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.keyboardPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keypress', this.keyboardPress);
    }

    keyboardPress(event) {
        if (event.keyCode === 13) {
            this.signUpClick();
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    signUpClick = () => {
        // imaginary ajax call
        let isValid = this.validateForm();

        if (isValid) {
            this.props.toasterHandler(true, true, "You have signed up!");

            // rather than doing real auth, just set the user to a property
            this.props.signUpHandler(this.state.username);
        }
        else {
            this.props.toasterHandler(true, false, "Form Error!");
        }

    }

    validateForm = () => {
        let isValid = true;

        isValid = this.validateEmail();
        isValid = this.validatePassword();
        isValid = this.validateConfirmPassword();

        if (isValid) {
            this.props.modalHandler(this.props.modal);
        }

        return isValid;
    }

    validateEmail = () => {
        let isValid = true;
        let message = ""

        if (!this.state.email.includes("@") || !this.state.email.includes("." || !this.state.email.length > 0)) {
            message = "That doesn't look like a valid email"
        }

        this.setState({
            emailError: message
        });

        return isValid;
    }

    validatePassword = () => {
        let isValid = true;
        let message = ""

        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (!numbers.some(r => this.state.password.includes(r))) {
            message = "Please include at least 1 number";
        }

        this.setState({
            passwordError: message
        });

        return isValid;
    }

    validateConfirmPassword = () => {
        let isValid = true;
        let message = "";

        if (this.state.password !== this.state.confirmPassword || !this.state.confirmPassword.length > 0) {
            message = "Password fields do not match."
            isValid = false;
        }

        this.setState({
            passwordConfirmError: message
        });

        return isValid;
    }

    render() {
        return (
            <div>
                <div className="auth-form">
                    <p className="auth-error" >{this.state.usernameError}</p>
                    <input type="text" value={this.state.username} onChange={this.handleInputChange} maxLength="255" id="username" name="username" placeholder="Username" className="auth-input" />
                    <p className="auth-error" >{this.state.emailError}</p>
                    <input type="text" value={this.state.email} onChange={this.handleInputChange} maxLength="255" id="email" name="email" placeholder="Email" className="auth-input" />
                    <p className="auth-error" >{this.state.passwordError}</p>
                    <input type="password" value={this.state.password} onChange={this.handleInputChange} maxLength="255" id="password" name="password" placeholder="Password" className="auth-input" />
                    <p className="auth-error" >{this.state.passwordConfirmError}</p>
                    <input type="password" value={this.state.passwordConfirm} onChange={this.handleInputChange} maxLength="255" id="confirmPassword" name="confirmPassword" placeholder="Retype Password" className="auth-input" />
                </div>
                <div className="auth-form-button-group">
                    <button onClick={this.signUpClick} className="btn btn-primary auth-submit"> Submit </button>
                </div>
            </div >
        );
    }
}

export default SignUp;