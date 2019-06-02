import React from 'react';
import Gallery from './Gallery';

const Dogs = (props) => {
    props.search('dogs');
    return (
            <Gallery response={props.resp} flag={props.flag} />
    );
}

export default Dogs;
