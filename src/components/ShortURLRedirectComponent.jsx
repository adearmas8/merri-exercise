import React, { Component } from 'react';

class ShortURLRedirectComponent extends Component {
    state = { error: false };

    componentDidMount() {
        const urls = JSON.parse(localStorage.getItem('urls')) || [];
        const url = urls.find(u => u.shortURL === window.location.href);
        if (url) window.location.assign(url.longURL);
        else this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <p>We're sorry but we cannot find that Short URL in our database</p>
            )
        }
        return null;
    }
}

export default ShortURLRedirectComponent;