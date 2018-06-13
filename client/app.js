import React, { Component } from 'react';
import { render } from 'react-dom';

import './app.css';

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() { }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));