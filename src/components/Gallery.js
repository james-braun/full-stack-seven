import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
    let pictures;
    if (props.response) {
        const results = props.response.data.photos.photo;
        pictures = results.map(picture =>
            <GalleryItem key={picture.id} farmId={picture.farm} serverId={picture.server} id={picture.id} secret={picture.secret} />
        );

        return (
            <div className="photo-container">
                <h2>{props.name}</h2>
                <ul>
                    {pictures}
                </ul>
            </div>
        );
    }
    return null;
}

export default Gallery;