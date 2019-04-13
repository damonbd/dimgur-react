import React, { Component } from 'react';

import Image from '../Image/Image'

import './ImageContainer.css'

class ImageContainer extends Component {

    constructor(props) {
        super(props);

        this.carouselHandler = this.carouselHandler.bind(this);
    }

    carouselHandler() {
        this.props.carouselHandler(true);
    }

    render() {
        return (
            <div className="image-container">
                <div onClick={this.carouselHandler}>
                    <Image image={this.props.image} />
                </div>
                <div style={{ backgroundColor: "#56585f" }}>
                    <div className="image-info">
                        <p className="image-font image-username">{this.props.image.username != "" ? this.props.image.username : "Anonymous"}</p>
                        <p className="image-font image-description">Image Description</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContainer;