import React, { Component } from 'react';
import Image from '../Image/Image';


import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let images = [];    
        
        let image = {};
        image.url = "https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome1x.png";
        
        images.push(image);
        images.push(image);
        images.push(image);

        return (
            <div className="gallery gallery-background-color">
                {
                    images.map(image => (
                        <Image image={image} />
                        //<img src = {image.url} />
                ))
            }
            </div>
        );
    }
}

export default Gallery;