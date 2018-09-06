import React, { Component } from 'react';
import './Uploader.css';

class uploader extends Component {
    render() {
        return (
            <div className="backgroundColor"> 
                <p>uploader component class</p>
                <button className="btn btn-success">+ Upload</button>
            </div>
        );
    }
}

// const uploader = () => {
//     return <div>uploader component const </div> 
// }
// test ssh

export default uploader;