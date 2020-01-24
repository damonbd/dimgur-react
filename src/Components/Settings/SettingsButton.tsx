import React, { Component } from 'react';

import './Settings.css'

interface ISettingsProps {
    SettingsHandler: Function;
    showSettingsText: boolean;
}

const SettingsButton = (props: ISettingsProps) => {
    let text: string = "";

    if (props.showSettingsText) {
        text = "Settings"
    } else {
        text = "Main Page"
    }

    return <div>
        <button onClick={() => props.SettingsHandler()} className="btn btn-primary"> {text} </button>
    </div>
}

export default SettingsButton;