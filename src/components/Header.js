import React from 'react';
import Form from './Form';
import Nav from './Nav';

const Header = (props) => {

    // this function pushes the input from the form 
    // element on to the address bar so it can be used
    // by Route.
    const getSearch = (tag) => {

        // if the input starts with an "/" or white space or multiple
        // "/"'s push a 404 error route addess to the address bar
        // rather than have the app crash.
        var expression = /^\/+/;
        tag = tag.replace(expression, "Error/404");
        expression = /^\s+/;
        tag = tag.replace(expression, "Error/404");

        // push input route to the address bar.
        props.history.push(`/${tag}`);
    }

    return (
        <div>
            <Form search={getSearch} />
            <Nav />
        </div>
    );
}

export default Header;
