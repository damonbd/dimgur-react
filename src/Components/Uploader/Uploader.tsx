import React, { Component } from 'react';

import IImage from '../../interfaces/IImage';
import IModal from '../../interfaces/IModal';

import './Uploader.css';
import '../Authentication/Authentication.css'

import stockImage from '../../images/uploader.png';

interface IUploaderProps {
    modal: IModal;
    username: string;

    galleryHandler: Function;
    modalHandler: Function;
    toasterHandler: Function;
}

interface IUploaderState {
    image: IImage;
    routes: any;
}

class Uploader extends Component<IUploaderProps, IUploaderState> {
    constructor(props: IUploaderProps) {
        super(props);
        this.state = {
            image: {
                index: 0,
                lastModified: "",
                lastModifiedDate: "",
                name: "",
                size: 0,
                title: "",
                type: "",
                url: stockImage,
                username: props.username != "" ? props.username : "Anonymous",
            },
            routes: this.getRoutes()
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange(event: any) {
        const value = event.target.value;

        this.setState(() => ({
            image: {
                ...this.state.image,
                title: value
            }
        }))
    }

    getRoutes = () => {
        var routes: any = [];
        var baseUrl: any = "http://localhost:8080";
        routes.uploadImageUrl = baseUrl + "/uploadImage";
        return routes;
    }

    triggerUpload = () => {
        let imageElement = document.getElementById('image');
        if (imageElement != null) {
            imageElement.click();
        }
    }

    handleImage = (e: any) => {
        // mock validation call
        this.imagePreview(e.target.files[0]);

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
        this.props.modal.isOpen = false;
        this.props.modalHandler(this.props.modal);
    }

    uploadError = () => {
        this.props.toasterHandler(true, false, "Something went wrong.");
    }

    imagePreview = (image: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(image);

        let updatedImage = { ...this.state.image };
        updatedImage.lastModified = image.lastModified;
        updatedImage.lastModifiedDate = image.lastModifiedDate;
        updatedImage.title = image.name;
        updatedImage.size = image.size;
        updatedImage.type = image.type;

        reader.onloadend = (e) => {
            updatedImage.url = reader.result;
            this.setState({
                image: updatedImage,
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
                    <img className="uploader-image" onClick={this.triggerUpload} src={this.state.image.url} alt="" />
                </div>
                <div>
                    <p> Select your image </p>
                    <input onChange={this.handleImage} type="file" id="image" className="uploader-hide" name="image" accept="image/*" />
                </div>
                <div>
                    <input type="text" value={this.state.image.title} onChange={this.handleInputChange} id="name" name="name" placeholder="Image Title" className="auth-input" autoFocus />
                </div>
                <div className="auth-form-button-group">
                    <button onClick={this.submit} className="btn btn-primary auth-submit"> Upload </button>
                </div>
            </div>
        );
    }
}

export default Uploader;