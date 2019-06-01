import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Items from './Items';


const App = () => {
    
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={Header} />
                <Route path="/:name" component={Items} />
            </div>
        </BrowserRouter>
            
    );
}

export default App;