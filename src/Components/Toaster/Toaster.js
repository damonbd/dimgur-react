import React, { Component } from 'react';
import $ from 'jquery';

import './Toaster.css'

const Toaster = (props) => {
    let backgroundColor = "toaster-background-error";
    if (props.isSuccess) {
        backgroundColor = "toaster-background-success";
    }

    return (
        <div onClick={props.hide} className={backgroundColor + " " + "toaster"}>
            <div className="toaster-body">
                {props.body}
            </div>
        </div>
    )
};

export default Toaster;
