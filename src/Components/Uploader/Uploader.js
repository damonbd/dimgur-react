import React, { Component } from 'react';
import './Uploader.css';

class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ""
        }
    }

    handleImage = (e) => {
        fetch('http://localhost:8080/uploadImage', {
            method: 'POST',
            body: e.target.files[0],
        }).then(
           //is there .success or interro resp
            () => {
                //add to gallery below
                alert("success post");
            }
        );
        
    }

    render() {
        return (
            <div className="backgroundColor"> 
                <p>uploader component class</p>

                <input onChange={this.handleImage} value={this.state.images} type="file" name="image" accept="image/*" />

            </div>
        );
    }
}

export default uploader;