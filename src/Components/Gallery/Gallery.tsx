import React, { Component } from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import IImage from '../../interfaces/IImage';
import IModal from '../../interfaces/IModal';

import './Gallery.css'

interface IGalleryProps {
    images: IImage[];
    modal: IModal;
    newImage?: IImage;
    username: string;

    carouselHandler: Function;
    modalHandler: Function;
}

interface IGalleryState {
    newImage?: IImage;
    images: IImage[];
}

class Gallery extends Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps) {
        super(props);

        this.state = {
            newImage: undefined,
            images: props.images
        }
    }

    componentDidMount() { }

    componentWillReceiveProps(nextProps: any) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.newImage !== this.state.newImage && nextProps.newImage !== undefined) {

            // let image = nextProps.newImage;
            // let reader = new FileReader();
            // let url = reader.readAsDataURL(image);

            // reader.onloadend = (e) => {
            //     image.url = reader.result;
            //     this.setState({
            //         newImage: image,
            //         images: [image, ...this.state.images]
            //     });
            // }

            let image = nextProps.newImage;

            this.setState({
                newImage: image,
                images: [image, ...this.state.images]
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