import React, { Component } from 'react';

import Image from '../Image/Image';
import ImageContainer from '../ImageContainer/ImageContainer';

import './Gallery.css'

// dummy media
import image1 from '../../images/test-media/image1.png';
import image2 from '../../images/test-media/image2.jpg';
import image3 from '../../images/test-media/image3.jpg';
import image4 from '../../images/test-media/image4.jpeg';
import image5 from '../../images/test-media/image5.jpg';
import image6 from '../../images/test-media/image6.jpg';

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

        let imagesToFormat = [image1, image2, image3, image4, image5, image6];
        imagesToFormat.forEach(i => {
            let image = {};
            image.url = i;
            images.push(image);
        });

        images[0].username = "Bobby";
        images[0].username = "Robert";

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
            <div className="gallery">
                {imageList}
            </div>
        );
    }
}

export default Gallery;