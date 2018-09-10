import React, { Component } from 'react';
import './Uploader.css';
import $ from 'jquery';

class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: "",
            routes: this.getRoutes()
        }
    }

    getRoutes = () => {
        var routes = new Array();
        var baseUrl = "http://localhost:8080";
        routes.uploadImageUrl = baseUrl + "/uploadImage";
        return routes;
    }

    triggerUpload = () => {
        document.getElementById('image').click();
    }

    handleImage = (e) => {
        $.ajax({
            type: "POST",
            processData: false,
            contentType: false,
            url: this.state.routes.uploadImageUrl,
            data: new FormData(e.target.files[0]),
            success: this.uploadSuccess,
            error: this.uploadError
        });
    }

    uploadSuccess = () => {
        //maybe modal can be modified to be used here, or just separate alerts pop up
        alert("success")
    }

    uploadError = () => {
        alert("error")
    }

    render() {
        return (
            <div className="backgroundColor">
                <p>uploader component class</p>

                <input onClick={this.triggerUpload} className="btn btn-success" type="button" id="upload" value="Upload" />
                <input onChange={this.handleImage} type="file" id="image" className="hide" name="image" accept="image/*" />

            </div>
        );
    }
}

export default uploader;