import React, { Component, ComponentState } from 'react';

import IModal from '../../../interfaces/IModal'

import '../Authentication.css'

interface ISignInProps {
    modal: IModal;

    signInHandler: Function;
    toasterHandler: Function;
    modalHandler: Function;
}

interface ISignInState {
    username: string;
    password: string;
}

class SignIn extends Component<ISignInProps, ISignInState> {
    constructor(props: ISignInProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
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

    render() {
        return (
            <div>
                <div className="auth-form">
                    <input type="text" value={this.state.username} onChange={this.handleInputChange} id="username" name="username" placeholder="Username" className="auth-input" />
                    <input type="password" value={this.state.password} onChange={this.handleInputChange} id="password" name="password" placeholder="Password" className="auth-input" />
                </div>
                <div className="auth-form-button-group">
                    <button onClick={this.signInClick} className="btn btn-primary auth-submit"> Submit </button>
                </div>
            </div>
        );
    }
}

export default SignIn;