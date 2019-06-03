import React from 'react';
import Gallery from './Gallery';

const Cats = (props) => {
    props.search('cats');
    return (
            <Gallery response={props.resp} flag={props.flag} />
    );
}
 
export default Cats;

