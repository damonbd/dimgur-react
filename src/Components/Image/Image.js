import React from 'react';

import './Image.css'

const Image = (props) => {
    return <div className="image-c">
        <img style={{"max-width": "100%" }} src={props.image.url} />
    </div>
}

export default Image;