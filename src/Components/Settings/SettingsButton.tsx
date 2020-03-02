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

    return <a onClick={() => props.SettingsHandler()} className="nav-link" href="#">{text}</a>
}

export default SettingsButton;