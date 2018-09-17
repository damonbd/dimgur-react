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
        
        images.push(image);
        images.push(image);
        images.push(image);
        images.push(image);
        images.push(image);
        images.push(image);
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
            var reader = new FileReader();
            let newImage = new Object();
            newImage.url = this.state.newImage;

            this.state.images.push(newImage);
            this.setState({
                images: this.state.images
            });
            console.log("pushed");
            console.log(this.state.images);
        }
      }

    render() {
        return (
            <div className="gallery gallery-background-color">
                {
                    this.state.images.map(image => (
                        <Image image={image} />
                        //<img src = {image.url} />
                ))
            }
            </div>
        );
    }
}

export default Gallery;