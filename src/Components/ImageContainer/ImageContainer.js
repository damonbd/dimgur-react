import React, { Component } from 'react';

import Image from '../Image/Image'

import './ImageContainer.css'

class ImageContainer extends Component {

    render() {
        return (
            <div className="image-container">
                <Image image={this.props.image} />
                <div style={{backgroundColor: "#56585f"}}>
                    Image Description
                    Action Comps below
                </div>
            </div>
        );
    }
}

export default ImageContainer;