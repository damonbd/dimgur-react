import React, { Component } from 'react';
import $ from 'jquery';

import './Uploader.css';
import Toaster from '../Toaster/Toaster';

class uploader extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        console.log(props);

        this.state = {
            images: "",
            routes: this.getRoutes()
        }
    }

    // toasterHandler = () => {
    //     this.props.toasterHandler();
    // }

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

        // this.setState({
        //     toaster: {
        //         isVisible: true,
        //         isSuccess: true,
        //         body: "toaster body success"
        //     }
        // });

        // setTimeout(() => {
        //     this.setState({
        //         toaster: {
        //             isVisible: false,
        //         }
        //     });
        // }, 2000)
    }

    uploadError = () => {
        //console.log(this.props);
        console.log(this.state);

        this.props.toasterHandler();
        //this.state.toasterHandler();

        console.log('test')
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