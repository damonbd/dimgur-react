import React, { Component } from 'react';

import ImageContainer from '../ImageContainer/ImageContainer';

import './Carousel.css'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: props.images,
            currentImage: props.images[props.index]
        }

        this.carouselNav = this.carouselNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.carouselNav);
    }

    componentWillUnmount() {
        window.removeEventListener('keypress', this.carouselNav);
    }

    carouselNav(e) {
        if (e.keyCode === 37) {
            this.updateCurrentImage(this.state.currentImage.index - 1);
         }
         if (e.keyCode === 39) {
            this.updateCurrentImage(this.state.currentImage.index + 1);            
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
            <div className="carousel-carousel">
                <ImageContainer image={this.state.currentImage} />
                <div className="carousel-controls">
                    <button onClick={() => this.updateCurrentImage(this.state.currentImage.index - 1)} className="carousel-btn-left btn btn-success signUp-submit"> {"<"} </button>
                    <button onClick={() => this.updateCurrentImage(this.state.currentImage.index + 1)} className="carousel-btn-right btn btn-success signUp-submit"> {">"} </button>
                </div>
            </div>
        );
    }
}

export default Carousel;