import React, { PureComponent } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import apiKey from './Config.js';


class Items extends PureComponent {

    constructor() {
        super();
        this.state = {
            resp: null,   // holds the data from the axios fetch.
            prevUrl: null // Holds the previously visited url.
        };
    }

    performSearch = (search) => {
        // fetch data from API
        var myhttp = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&text=${search}`;
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
                <div className="photo-container">
                    <h2>loading...</h2>
                    {/*sk-fading-circle curtesy https://tobiasahlin.com/spinkit/ */}
                    <div class="sk-fading-circle">
                        <div class="sk-circle1 sk-circle"></div>
                        <div class="sk-circle2 sk-circle"></div>
                        <div class="sk-circle3 sk-circle"></div>
                        <div class="sk-circle4 sk-circle"></div>
                        <div class="sk-circle5 sk-circle"></div>
                        <div class="sk-circle6 sk-circle"></div>
                        <div class="sk-circle7 sk-circle"></div>
                        <div class="sk-circle8 sk-circle"></div>
                        <div class="sk-circle9 sk-circle"></div>
                        <div class="sk-circle10 sk-circle"></div>
                        <div class="sk-circle11 sk-circle"></div>
                        <div class="sk-circle12 sk-circle"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <Gallery name={this.props.match.params.name} response={this.state.resp} />
            );
        }
    }
}

export default Items;