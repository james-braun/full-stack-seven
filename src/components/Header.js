import React from 'react';
import Form from './Form';
import Nav from './Nav';

const Header = (props) => {
    const getSearch = (tag) => {
        props.history.push(tag);
    }

    return (
        <div>
            <Form search={getSearch} />
            <Nav />
        </div>
    );
}

export default Header;
