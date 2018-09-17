import React, { Component } from 'react';

import './Image.css'

class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="image-c">
                <img src = {this.props.image.url} />
            </div>
        );
    }
}

export default Image;