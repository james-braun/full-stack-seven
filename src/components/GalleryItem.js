import React from 'react';

const GalleryItem = (props) => {
    var src = `https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`
    return (
        <li>
            <img src={src} alt="" />
        </li>
    );   
}
   
export default GalleryItem;