import React, { Component } from 'react';
import { is_uri } from 'valid-url';

import HeaderComponent from "./HeaderComponent";

export class ConverterForm extends Component {
    state = { url: '', shortURL: '' };

    updateValue = (e) => {
        this.setState({ url: e.target.value, shortURL: '' });
    };

    encodeURL = () => {
        // using an array here -> should eventually use a hashtable for easy lookup once the number of stored URLs gets greater and greater
        let urls = JSON.parse(localStorage.getItem('urls')) || [];
        // not exactly an ideal encoding algorithm, but for time sake using a simple date to convert
        const encoded = Date.now().toString(36);
        const shortURL = `${window.location.origin}/short-url/${encoded}`;
        const urlOBJ = { longURL: this.state.url, shortURL };
        urls.push(urlOBJ);
        localStorage.setItem("urls", JSON.stringify(urls));
        this.setState({ shortURL, url: '' });
    };

    render() {
        return (
            <div>
                <HeaderComponent/>
                <p>Enter a valid URL to convert to a short URL</p>
                <input
                    type="text"
                    onChange={this.updateValue}
                    value={this.state.url}
                />
                <button disabled={!is_uri(this.state.url)} onClick={this.encodeURL}>Convert</button>
                {!!this.state.shortURL && (
                    <div>
                    <p>Your shortened URL is:</p>
                    <a href={this.state.shortURL}>{this.state.shortURL}</a>
                </div>
                )}
            </div>
        )
    }
}

export default ConverterForm;