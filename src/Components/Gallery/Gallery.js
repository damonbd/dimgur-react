import React, { Component } from 'react';
import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props);
    }

    createGallery = () => {
        //mock the data
        let images = [];    
        
        let image = {};
        image.url = "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426";
        
        images.push(image);
        images.push(image);
        images.push(image);

        

        let gallery = [];

        for (let i = 0; i < images.length; i++)
        {

        }

        gallery.push(<div className="row full-width"> </div>);
        gallery.push(<div> hello </div>)
        //gallery.push(</div>);

        return gallery;
    }

    render() {

        let images = [];    
        
        let image = {};
        image.url = "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426";
        
        images.push(image);
        images.push(image);
        images.push(image);

        return (
            <div className="gallery-background-color">
            gallery begin
            {
                images.map(image => (
                    <img src = {image.url} />
                ) )
            }


            gallery end
            </div>
        );
    }
}

export default Gallery;