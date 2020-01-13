import React from 'react';

import './Loading.css'

const Loading = () => {
    return (
        <div className="progress loading-progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated loading-progress-bar" role="progressbar">Loading</div>
        </div>
    )
};

export default Loading;
