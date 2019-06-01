import React from 'react';
import Form from './Form';
import Nav from './Nav';
//import { NavLink } from 'react-router-dom';

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
