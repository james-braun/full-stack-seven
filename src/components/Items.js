import React, { PureComponent } from 'react';
import Gallery from './Gallery';
import axios from 'axios';
import Key from './Config.js';


class Items extends PureComponent {

    constructor() {
        super();
        this.state = {
            resp: null,
            flag: null
        };
    }
    componentDidMount() {
        this.performSearch(this.props.match.params.name);
    }
    performSearch = (search) => {
        var myhttp = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&per_page=24&format=json&nojsoncallback=1&text=${search}`;
        axios(myhttp)
            .then(response => {
                this.setState({
                    resp: response,
                    flag: this.props.match.url
                });
            })
            .catch(error => {
                console.log('Error fetching and Parsing data ', error);
            });
    }
    render() {
        if (this.state.flag !== this.props.match.url) {
            console.log("I'm inside!");
            this.performSearch(this.props.match.params.name);
        }
        return (
            <Gallery name={this.props.match.params.name} response={this.state.resp} />
        );
    }
}

export default Items;