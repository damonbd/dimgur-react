import React, { Component } from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import IImage from '../../interfaces/IImage';
import IModal from '../../interfaces/IModal';

import './Gallery.css'

interface IGalleryProps {
    images: IImage[];
    modal: IModal;
    username: string;

    carouselHandler: Function;
    modalHandler: Function;
}

interface IGalleryState {
    images: IImage[];
}

class Gallery extends Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps) {
        super(props);

        this.state = {
            images: props.images
        }
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.images !== null && nextProps.images !== undefined && nextProps.images.length > 0) {
            this.setState({
                images: nextProps.images
            });
        }
    }

    render() {
        let imageList = this.state.images.map((image: any, i: number) => (
            <ImageContainer carouselHandler={this.props.carouselHandler} modalHandler={this.props.modalHandler} modal={this.props.modal} key={i} image={image} />
        ));

        return (
            <div className="gallery">
                {imageList}
            </div>
        );
    }
}

export default Gallery;