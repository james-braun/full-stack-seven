import React, { Component } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import Key from './Config.js';



class Items extends Component {

    constructor(props) {
        super();
        this.state = {
            resp: null,
            match: props.match.params.name
        };
    }

    componentDidMount() {
        this.performSearch(this.state.match);
    }

    performSearch = (search) => {
        var myhttp = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&per_page=24&format=json&nojsoncallback=1&text=${search}`;
        axios(myhttp)
            .then(response => {
                this.setState({
                    resp: response
                });
            })
            .catch(error => {
                console.log('Error fetching and Parsing data ', error);
            });
    }

    render() {
        
        return (
            <Gallery name={this.state.match} response={this.state.resp} />
        );
    }
}

export default Items;