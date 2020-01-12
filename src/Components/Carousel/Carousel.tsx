import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ImageContainer from '../ImageContainer/ImageContainer';
import Download from '../Download/Download';

import IImage from '../../interfaces/IImage';

import './Carousel.css'

interface ICarouselProps {
    index: number;
    images: IImage[];
}

interface ICarouselState {
    images: IImage[];
    currentImage: IImage;
}

class Carousel extends Component<ICarouselProps, ICarouselState> {
    constructor(props: ICarouselProps) {
        super(props);
        this.state = {
            images: props.images,
            currentImage: props.images[props.index]
        }

        this.carouselNav = this.carouselNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.carouselNav);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.carouselNav);
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps != null) {
            this.setState({ images: nextProps.images })
        }

        if (nextProps != null && this.state.currentImage == null) {
            this.setState({ currentImage: nextProps.images[0] })
        }
    }

    carouselNav(e: any) {
        if (e.keyCode === 37) {
            this.updateCurrentImage(this.state.currentImage.index - 1);
        }
        if (e.keyCode === 39) {
            this.updateCurrentImage(this.state.currentImage.index + 1);
        }
    }

    updateCurrentImage(index: number) {
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

        let toRender = null;

        if (this.state.images != null && this.state.images.length > 0 && this.state.currentImage != null) {
            toRender = (
                <div className="carousel-carousel">
                    <ReactCSSTransitionGroup transitionName="background" transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
                        <ImageContainer cursor="default" image={this.state.currentImage} key={this.state.currentImage.index} />
                    </ReactCSSTransitionGroup>
                    <div className="carousel-controls">
                        <button onClick={() => this.updateCurrentImage(this.state.currentImage.index - 1)} className="carousel-btn-left btn btn-success auth-submit"> {"<"} </button>
                        <Download image={this.state.currentImage} />
                        <button onClick={() => this.updateCurrentImage(this.state.currentImage.index + 1)} className="carousel-btn-right btn btn-success auth-submit"> {">"} </button>
                    </div>
                </div>
            )
        }

        return (
            toRender
        );
    }
}

export default Carousel;