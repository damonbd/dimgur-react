import React from 'react';

import './Image.css'

const Image = (props) => {
    return <div className="image-c">
        <img style={{maxWidth: "100%", height: "240px" }} src={props.image.url} />
    </div>
}

export default Image;