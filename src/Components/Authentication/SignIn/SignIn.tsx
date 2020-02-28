import React, { Component, ComponentState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import IModal from '../../../interfaces/IModal';

import '../Authentication.css'

interface ISignInProps {
    modal: IModal;

    modalHandler: Function;
    signInHandler: Function;
    toasterHandler: Function;
}

interface ISignInState {
    username: string;
    password: string;
    email: string;
    showPasswordResetForm: boolean;
}

class SignIn extends Component<ISignInProps, ISignInState> {
    constructor(props: ISignInProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            showPasswordResetForm: false
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

    //React.KeyboardEvent
    keyboardPress = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            this.signInClick();
        }
    }

    handleInputChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        } as ComponentState)
    }

    signInClick = () => {
        // imaginary ajax call
        let isValid = true;

        if (isValid) {
            this.props.toasterHandler(true, true, "Sign in successful.");

            // rather than doing real auth, just set the user to a property
            this.props.signInHandler(this.state.username);

            this.props.modal.isOpen = false;
            this.props.modalHandler(this.props.modal);
        }
        else {
            this.props.toasterHandler(true, false, "Error: Wrong credentials!");
        }
    }

    resetPasswordClick = () => {
        // imaginary ajax call
        let isValid = true;

        if (isValid) {
            this.props.toasterHandler(true, true, "Password Reset Successful.");
            this.setState({
                showPasswordResetForm: false,
                email: "",
                username: "",
                password: ""
            });
        }
        else {
            this.props.toasterHandler(true, false, "Error: Something vague went wrong!");
        }
    }

    showPasswordResetClick = () => {

        console.log('cloicked')

        this.setState({
            showPasswordResetForm: !this.state.showPasswordResetForm,
            email: "",
            username: "",
            password: ""
        });
    }

    render() {
        let toRender = null;

        if (!this.state.showPasswordResetForm) {
            toRender = (
                <div key={this.state.showPasswordResetForm.toString()}>
                    <div className="auth-form">
                        <input type="text" value={this.state.username} onChange={this.handleInputChange} id="username" name="username" placeholder="Username" className="auth-input" autoFocus />
                        <input type="password" value={this.state.password} onChange={this.handleInputChange} id="password" name="password" placeholder="Password" className="auth-input" />
                    </div>
                    <div className="auth-form-button-group">
                        <a onClick={this.showPasswordResetClick} className="auth-forgot"> Forgot Password? </a>
                        <button onClick={this.signInClick} className="btn btn-primary auth-submit"> Submit </button>
                    </div>
                </div>
            )
        }
        else {
            toRender = (
                <div key={this.state.showPasswordResetForm.toString()}>
                    <div className="auth-form">
                        <input type="text" value={this.state.email} onChange={this.handleInputChange} id="email" name="email" placeholder="Email" className="auth-input" autoFocus />
                    </div>
                    <div className="auth-form-button-group">
                        <a onClick={this.showPasswordResetClick} className="auth-forgot"> Back to Sign in? </a>
                        <button onClick={this.resetPasswordClick} className="btn btn-primary auth-submit"> Reset Password </button>
                    </div>
                </div>
            )
        }

        return (
            <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={400} transitionLeave={false}>
                {toRender}
            </ReactCSSTransitionGroup>
        );
    }
}

export default SignIn;
