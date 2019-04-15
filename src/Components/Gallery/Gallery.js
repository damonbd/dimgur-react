import React, { Component } from 'react';

import Image from '../Image/Image';
import ImageContainer from '../ImageContainer/ImageContainer';

import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newImage: " ",
            images: props.images
        }
    }

    componentDidMount() { }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.newImage !== this.state.newImage && nextProps.newImage != undefined) {

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
        let imageList = this.state.images.map((image, i) => (
            <ImageContainer carouselHandler={this.props.carouselHandler} key={i} image={image} />
        ));

        return (
            <div className="gallery">
                {imageList}
            </div>
        );
    }
}

export default Gallery;