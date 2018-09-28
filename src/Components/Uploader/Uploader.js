import React, { Component } from 'react';
import $ from 'jquery';

import Toaster from '../Toaster/Toaster';

import './Uploader.css';

class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            error: this.uploadSuccess
        });
    }

    //takes an Image oject returned by handleImage, sets state, notifies toaster and gallery
    uploadSuccess = () => {

        //dummy data
        let image = {};
        image.url = "https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome1x.png";

        this.setState({
            newImage: image
        });

        this.props.galleryHandler(this.state.newImage);
        this.props.toasterHandler(true, true, "Image successfully uploaded.");  
    }

    uploadError = () => {
        this.props.toasterHandler(true, false, "Something went wrong.");
    }

    render() {
        return (
            <div className="uploader-backgroundColor">
                <p>uploader component class</p>

                <input onClick={this.triggerUpload} className="btn btn-success" type="button" id="upload" value="Upload" />
                <input onChange={this.handleImage} type="file" id="image" className="uploader-hide" name="image" accept="image/*" />
            </div>
        );
    }
}

export default uploader;