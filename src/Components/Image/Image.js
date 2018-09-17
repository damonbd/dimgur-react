import React from 'react';

import './Image.css'

const Image = (props) => {
    return <div className="image-c">
        <img src={props.image.url} />
    </div>
}

export default Image;