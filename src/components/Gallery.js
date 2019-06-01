import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults'

const Gallery = (props) => {
    let pictures;
    if (props.response) {
        const results = props.response.data.photos.photo;
        if (results.length > 0) {
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
    }
    return <NoResults />;
}

export default Gallery;