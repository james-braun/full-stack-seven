import React from 'react';
import Gallery from './Gallery';


const Computers = (props) => {
	props.search('computers')
    return (
        <Gallery response={props.resp} flag={props.flag} />
    );
}

export default Computers;
