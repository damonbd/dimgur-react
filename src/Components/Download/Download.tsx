import React from 'react';

import IImage from '../../interfaces/IImage';

interface IDownloadProps {
  image: IImage;
}

const Download = (props: IDownloadProps) => {
  return <a className="btn btn-success" role="button" href={props.image.url}
    download={props.image.name != null ? props.image.name : "Image"}>
    Download
 </a>
}

export default Download;