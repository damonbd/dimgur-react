import React from 'react';

import IImage from '../../interfaces/IImage';

import './Image.css'

interface IImageProps {
    image: IImage;
  }

const Image = (props: IImageProps) => {
    return <div className="image-c">
        <img style={{maxWidth: "100%", height: "240px" }} src={props.image.url} alt={props.image.title} />
    </div>
}

export default Image;