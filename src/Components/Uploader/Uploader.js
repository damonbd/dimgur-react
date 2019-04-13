import React, { Component } from 'react';
import $ from 'jquery';

import Toaster from '../Toaster/Toaster';

import './Uploader.css';
import '../SignUp/SignUp.css'

class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            routes: this.getRoutes()
        }

        this.submit = this.submit.bind(this);
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
        // mock call

        this.imagePreview(e.target.files[0]);
        //this.uploadSuccess(e.target.files[0]);

        // $.ajax({
        //     type: "POST",
        //     processData: false,
        //     contentType: false,
        //     url: this.state.routes.uploadImageUrl,
        //     data: new FormData(e.target.files[0]),
        //     success: this.uploadSuccess(e.target.files[0]),
        //     error: this.uploadSuccess
        // });

        //reset input
        e.target.value = null;
    }

    //takes an Image oject returned by handleImage, sets state, notifies toaster and gallery
    uploadSuccess() {
        if (this.state.image.type == null) {
            return;
        }

        //add to gallery     
        this.props.toasterHandler(true, true, "Image successfully uploaded.");
        this.props.galleryHandler(this.state.image);
        this.props.modalHandler(false);
    }

    uploadError = () => {
        this.props.toasterHandler(true, false, "Something went wrong.");
    }

    imagePreview = (image) => {
        let reader = new FileReader();
        let url = reader.readAsDataURL(image);

        reader.onloadend = (e) => {
            image.url = reader.result;
            this.setState({
                image: image,
            });
        }
    }

    submit() {
        // fake ajax
        this.uploadSuccess();
    }

    render() {
        return (
            <div>
                <div>
                    <img style={{width: "256px"}} src={this.state.image != null ? this.state.image.url : ""} />
                </div>
                <div>
                    <input onClick={this.triggerUpload} className="btn btn-success" type="button" id="upload" value="Select Image" />
                    <input onChange={this.handleImage} type="file" id="image" className="uploader-hide" name="image" accept="image/*" />
                </div>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleInputChange} maxLength="255" id="name" name="name" placeholder="Image Title" className="signUp-input" />
                </div>
                <div className="signUp-form-button-group">
                    <button onClick={this.submit} className="btn btn-primary signUp-submit"> Upload </button>
                </div>
            </div>
        );
    }
}

export default uploader;