import React from 'react';

const Download = (props) => {
    debugger;
    console.log(props)
    return <a className="btn btn-success" role="button" href={props.image.url}
    download={props.image.name != null ? props.image.name : "Image"}>
   Download
 </a>
}

export default Download;