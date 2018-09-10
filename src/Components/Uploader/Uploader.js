import React, { Component } from 'react';
import './Uploader.css';
import $ from 'jquery';
import Toaster from '../Toaster/Toaster';


class uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: "",
            routes: this.getRoutes(),
            toaster: {
                isVisible: false,
                isSuccess: false,
                body: ""
            }
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

        this.setState({
            toaster: {
                isVisible: true,
                isSuccess: true,
                body: "toaster body success"
            }
        });

        setTimeout(() => {
            this.setState({
                toaster: {
                    isVisible: false,
                }
            });
        }, 2000)
    }

    uploadError = () => {
        alert("error")

        this.setState({
            toaster: {
                isVisible: true,
                isSuccess: false,
                body: "toaster body error"
            }
        });

        setTimeout(() => {
            this.setState({
                toaster: {
                    isVisible: false,
                }
            });
        }, 2000)
    }

    render() {
        return (
            <div className="backgroundColor">
                <p>uploader component class</p>

                <input onClick={this.triggerUpload} className="btn btn-success" type="button" id="upload" value="Upload" />
                <input onChange={this.handleImage} type="file" id="image" className="hide" name="image" accept="image/*" />

                {this.state.toaster.isVisible ? <Toaster success={this.state.toaster.isSuccess} body={this.state.toaster.body} /> : null}

            </div>
        );
    }
}

export default uploader;