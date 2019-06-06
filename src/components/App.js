import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import Error from './Error';


const App = () => {
    
    return (
        <BrowserRouter>
            <div className="container">
                <Route component={Header} />
                <Route exact path="/" render={() => <Redirect to="/cats" />} />
                <Switch>
                    <Route exact path="/:name" component={Container} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
            
    );
}

export default App;