import React, { Component } from 'react';

import Image from '../Image/Image';

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
        image.id = 1;

        images.push(image);

        this.setState({
            images: images
        });
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.newImage !== this.state.newImage) {
            this.setState({ newImage: nextProps.newImage });
        }

        if (this.state.newImage != " ") {
            this.setState({
                images: [...this.state.images, this.state.images[0]]
                //images: [...this.state.images, this.state.newImage]
            });
        }
    }

    render() {
        let imageList = this.state.images.map(image => (
            <Image key={image.id} image={image} />
        ));

        return (
            <div className="gallery gallery-background-color">
                {imageList}
            </div>
        );
    }
}

export default Gallery;