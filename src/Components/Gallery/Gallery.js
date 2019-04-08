import React, { Component } from 'react';

import Image from '../Image/Image';
import ImageContainer from '../ImageContainer/ImageContainer';

import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: " ",
            images: []
        }
    }

    componentDidMount() {
        this.createImageArray();
    }

    createImageArray() {
        let images = [];

        let image = {};
        image.url = "https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome1x.png";

        images.push(image);

        this.setState({
            images: images
        });
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.newImage !== this.state.newImage && nextProps.newImage != undefined) {

            let image = nextProps.newImage;
            let reader = new FileReader();
            let url = reader.readAsDataURL(image);

            reader.onloadend = (e) => {
                image.url = reader.result;
                console.log(reader)
                this.setState({
                    newImage: image,
                    images: [image, ...this.state.images]
                });
            }
        }
    }

    render() {
        let imageList = this.state.images.map((image, i) => (
            <ImageContainer key={i} image={image} />
        ));

        return (
            <div className="gallery gallery-background-color">
                {imageList}
            </div>
        );
    }
}

export default Gallery;