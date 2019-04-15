import React, { Component } from 'react';

import Image from '../Image/Image'

import './ImageContainer.css'

class ImageContainer extends Component {

    constructor(props) {
        super(props);

        this.showCarouselModal = this.showCarouselModal.bind(this);
    }

    showCarouselModal() {
        if (this.props.carouselHandler != null && this.props.modalHandler != null) {
            this.props.modalHandler("carousel", true);
            this.props.carouselHandler(this.props.image.index);
        }
    }

    render() {
        return (
            <div className="image-container">
                <div onClick={this.showCarouselModal}>
                    <Image image={this.props.image} />
                </div>
                <div style={{ backgroundColor: "#56585f" }}>
                    <div className="image-info">
                        <div>
                            <p className="image-font image-text">{this.props.image.username != null ? this.props.image.username : "Anonymous"}</p>
                            <p className="image-font image-text">{this.props.image.title}</p>
                        </div>
                        <div>
                            <p className="image-font image-description">Image Description</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContainer;