import React, { Component } from 'react';

import './Settings.css'

interface ISettingsProps {
    SettingsHandler: Function;
}

const SettingsButton = (props: ISettingsProps) => {
    return <div>
        <button onClick={() => props.SettingsHandler()} className="btn btn-primary">Settings</button>
    </div>
}

export default SettingsButton;