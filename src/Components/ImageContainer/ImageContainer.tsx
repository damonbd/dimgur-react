import React, { Component } from 'react';

import Image from '../Image/Image'

import './ImageContainer.css'

interface IImageContainerProps {
    image?: any;
    modal?: any;
    cursor?: any;
    carouselHandler?: Function;
    modalHandler?: Function;
}

interface IImageContainerState {
    cursor: string;
}

class ImageContainer extends Component<IImageContainerProps, IImageContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            cursor: props.cursor
        }

        this.showCarouselModal = this.showCarouselModal.bind(this);
    }

    showCarouselModal() {
        if (this.props.carouselHandler != null && this.props.modalHandler != null) {
            this.props.modal.isOpen = !this.props.modal.isOpen;
            this.props.modalHandler(this.props.modal, true);
            this.props.carouselHandler(this.props.image.index);
        }
    }

    render() {

        return (
            <div className="image-container" style={{ cursor: this.props.cursor }} >
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