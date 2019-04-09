import React, { Component } from 'react';

import Image from '../Image/Image'

import './ImageContainer.css'

class ImageContainer extends Component {

    render() {
        return (
            <div className="image-container">
                <Image image={this.props.image} />
                <div style={{ backgroundColor: "#56585f" }}>
                    <div className="image-info">
                        <p className="image-font image-username">{this.props.image.username != "" ? this.props.image.username : "Anonymous"}</p>
                        <p className="image-font image-description">Image Description</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContainer;