import React, { Component } from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import './Carousel.css'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: props.images,
            currentImage: props.images[0]
        }
    }

    updateCurrentImage(index) {
        if (index < 0) {
            index = this.state.images.length - 1;
        }
        else if (index >= 0) {
            if (typeof this.state.images[index] === 'undefined') {
                index = 0;
            }
        }

        this.setState({
            currentImage: this.state.images[index]
        })
    }

    render() {
        return (
            <div className="">
                    <ImageContainer image={this.state.currentImage} />
                    <button onClick={() => this.updateCurrentImage(this.state.currentImage.index + 1)} className="btn btn-success signUp-submit"> Nav Right </button>
                    <button onClick={() => this.updateCurrentImage(this.state.currentImage.index - 1)} className="btn btn-success signUp-submit"> Nav Left </button>
            </div>
        );
    }
}

export default Carousel;