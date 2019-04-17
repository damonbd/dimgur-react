import React, { Component } from 'react';

import '../Authentication.css'

interface IMyComponentProps {
    signInHandler: Function;
    toasterHandler: Function;
    modalHandler: Function;
    modal: any;
}

interface IMyComponentState {
    username?: any;
    password?: any;
}

class SignIn extends Component<IMyComponentProps, IMyComponentState> {
    constructor(props: any) {
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
    keyboardPress = (e: any) => {
        if (e.keyCode === 13) {
            this.signInClick();
        }
    }

    handleInputChange(e: any) {
        const target: any = e.target;
        const name: any = target.name;
        const value: any = target.value;

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