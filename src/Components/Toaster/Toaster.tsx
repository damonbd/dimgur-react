import React from 'react';

import './Toaster.css'

interface IToasterProps {
    body: string;
    isSuccess: boolean;

    hide: Function;
}

const Toaster = (props: IToasterProps) => {
    let backgroundColor = "toaster toaster-background-error";
    if (props.isSuccess) {
        backgroundColor = "toaster toaster-background-success";
    }

    return (
        <div onClick={() => props.hide()} className={backgroundColor}>
            <div className="toaster-body">
                {props.body}
            </div>
        </div>
    )
};

export default Toaster;
