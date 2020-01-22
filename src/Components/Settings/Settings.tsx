import React, { Component, ComponentState } from 'react';

import './Settings.css'

interface ISettingsProps {
    toasterHandler: Function;
}

interface ISettingsState {
    username: string;
    password: string;
    updatePassword: string;
    updatePasswordConfirmation: string;
    email: string;
}

class Settings extends Component<ISettingsProps, ISettingsState> {
    constructor(props: ISettingsProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            updatePassword: "",
            updatePasswordConfirmation: "",
            email: ""
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
            this.setState({
                password: this.state.updatePassword,
                updatePassword: "",
                updatePasswordConfirmation: ""
            });

            this.props.toasterHandler(true, true, "Profile Updated!");
        }
        else {
            this.props.toasterHandler(true, false, "Error: Something vague went wrong!");
        }
    }

    render() {
        let toRender = null;
        toRender = (
            <div>
                <div className="settings-form">
                    <input type="text" value={this.state.username} onChange={this.handleInputChange} id="username" name="username" placeholder="Username" className="settings-input" />
                    <input type="text" value={this.state.email} onChange={this.handleInputChange} id="email" name="email" placeholder="Email" className="settings-input" />
                    <input type="password" value={this.state.password} onChange={this.handleInputChange} id="password" name="password" placeholder="Password" className="settings-input" />
                    <input type="updatePassword" value={this.state.updatePassword} onChange={this.handleInputChange} id="updatePassword" name="updatePassword" placeholder="Update Password" className="settings-input" />
                    <input type="updatePasswordConfirmation" value={this.state.updatePasswordConfirmation} onChange={this.handleInputChange} id="updatePasswordConfirmation" name="updatePasswordConfirmation" placeholder="Update Password Confirmation" className="settings-input" />
                </div>
                <div className="settings-form-button-group">
                    <button onClick={this.signInClick} className="btn btn-primary auth-submit"> Submit </button>
                </div>
            </div>
        )

        return (
            toRender
        );
    }
}

export default Settings;