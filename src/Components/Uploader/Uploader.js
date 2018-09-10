import React, { Component } from 'react';
import './Uploader.css';

class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ""
        }
    }

    triggerUpload = () => {
        document.getElementById('image').click();
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

                <input onClick={this.triggerUpload} className="btn btn-success" type="button" id="upload" value="Upload"  />
                <input onChange={this.handleImage} type="file" id="image" className="hide" name="image" accept="image/*"/>

            </div>
        );
    }
}

export default uploader;