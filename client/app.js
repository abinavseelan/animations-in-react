import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';

import './app.css';

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() { }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/demo-1" component={Demo1} />
                    <Route path="/demo-2" component={Demo2} />
                    <Route path="/demo-3" component={Demo3} />
                </Switch>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));