import React, { PureComponent } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import apiKey from './config.js';
import Loader from './Loader';

class Container extends PureComponent {

    constructor() {
        super();
        this.state = {
            resp: null,   // holds the data from the axios fetch.
            prevUrl: null // Holds the previously visited url.
        };
    }

    performSearch = (search) => {
        // fetch data from API
        var myhttp = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&text=${search}&tags=${search}`;
        axios(myhttp)
            .then(response => {
                this.setState({
                    resp: response,  // set to data response.
                    prevUrl: this.props.match.url // set to current url.
                });
            })
            .catch(error => {
                console.log('Error fetching and Parsing data ', error);
            });
    }
    render() {
        // if the previously rendered url is not the current url being 
        // rendered then preform a search and display "loading..." and update
        // the 'prevUrl' in the search function. otherwise display results.
        if (this.state.prevUrl !== this.props.match.url) {
            this.performSearch(this.props.match.params.name);
            return (
                <Loader />
            );
        } else {
            return (
                <Gallery name={this.props.match.params.name} response={this.state.resp} />
            );
        }
    }
}

export default Container;