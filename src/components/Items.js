import React, { PureComponent } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import Key from './Config.js';


class Items extends PureComponent {

    constructor() {
        super();
        this.state = {
            resp: null,
            prevUrl: null
        };
    }

    performSearch = (search) => {
        var myhttp = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&per_page=24&format=json&nojsoncallback=1&text=${search}`;
        axios(myhttp)
            .then(response => {
                this.setState({
                    resp: response,
                    prevUrl: this.props.match.url
                });
            })
            .catch(error => {
                console.log('Error fetching and Parsing data ', error);
            });
    }
    render() {
        if (this.state.prevUrl !== this.props.match.url) {
            this.performSearch(this.props.match.params.name);
            return (
                <Gallery name={'loading...'} response={this.state.resp} />
            );
        } else {
            return (
                <Gallery name={this.props.match.params.name} response={this.state.resp} />
            );
        }
    }
}

export default Items;