import React, { Component } from 'react';

import './Uploader.css';
import '../SignUp/SignUp.css'

import stockImage from '../../images/uploader.png';

class uploader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: {
                url: stockImage,
                title: ""
            },
            routes: this.getRoutes()
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;

        this.setState(() => ({
            image: {
                ...this.state.image,
                title: value
            }
        }))
    }

    getRoutes = () => {
        var routes = [];
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

        this.setState({
            title: e.target.files[0].name
        })

        //reset input
        e.target.value = null;
    }

    //takes an Image oject returned by handleImage, sets state, notifies toaster and gallery
    uploadSuccess() {
        if (this.state.image == null) {
            return;
        }

        //add to gallery     
        this.props.toasterHandler(true, true, "Image successfully uploaded.");
        this.props.galleryHandler(this.state.image);
        this.props.modalHandler("uploader", false);
    }

    uploadError = () => {
        this.props.toasterHandler(true, false, "Something went wrong.");
    }

    imagePreview = (image) => {
        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onloadend = (e) => {
            image.url = reader.result;
            image.title = image.name;
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
                    <img onClick={this.triggerUpload} style={{ width: "256px" }} src={this.state.image.url} alt="" />
                </div>
                <div>
                    <p> Select your image </p>
                    <input onChange={this.handleImage} type="file" id="image" className="uploader-hide" name="image" accept="image/*" />
                </div>
                <div>
                    <input type="text" value={this.state.image.title} onChange={this.handleInputChange} maxLength="255" id="name" name="name" placeholder="Image Title" className="signUp-input" />
                </div>
                <div className="signUp-form-button-group">
                    <button onClick={this.submit} className="btn btn-primary signUp-submit"> Upload </button>
                </div>
            </div>
        );
    }
}

export default uploader;