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
            images: props.images
        }

        this.updateGallery = this.updateGallery.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateGallery);
    }

    updateGallery() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            let images = [];

            let imagesToFormat = [image6, image5, image4, image3, image2, image1];
            imagesToFormat.forEach(i => {
                let image = {};
                image.url = i;
                images.push(image);
            });

            images[0].username = "Bobby";
            images[0].username = "Robert";

            this.setState({
                images: [...this.state.images, ...images]
            })
        }

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

        if (nextProps.images != null && nextProps.images.length > 0) {
            this.setState({
                images: [...this.state.images, ...nextProps.images]
            })
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