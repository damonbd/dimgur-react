import React from 'react';

import './SignUp.css'

const SignUp = (props) => {
    return <div>
        <div className="signUp-form">
            <input type="text" maxLength="255" id="username" placeholder="Username" className="signUp-input" />
            <input type="text" maxLength="255" id="email" placeholder="Email" className="signUp-input" />
            <input type="password" maxLength="255" id="password" placeholder="Password" className="signUp-input" />
            <input type="password" maxLength="255" id="confirmPassword" placeholder="Retype Password" className="signUp-input" />
        </div>
        <div className="signUp-form-button-group">
            <button className="btn btn-primary signUp-submit"> Submit </button>
        </div>
    </div>
}

export default SignUp;