import React, { Component } from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import './Gallery.css'

interface IMyComponentProps {
    carouselHandler: any;
    modalHandler: any;
    modal: any;
    images: any;
    newImage: any;
    username: any;
}

interface IMyComponentState {
    newImage: string;
    images: any;
}

class Gallery extends Component<IMyComponentProps, IMyComponentState> {

    constructor(props: any) {
        super(props);

        this.state = {
            newImage: " ",
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

            let image = nextProps.newImage
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