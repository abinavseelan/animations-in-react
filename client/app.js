import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Demo1 from './Final/Demo1';
import Demo2 from './Final/Demo2';
import Demo3 from './Final/Demo3';
import Demo4 from './Final/Demo4';

import LiveDemo2 from './Live/Demo2';
import LiveDemo3 from './Live/Demo3';
import LiveDemo4 from './Live/Demo4';

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
                    <Route exact path="/" component={Home} />
                    <Route path="/final/demo-1" component={Demo1} />
                    <Route path="/final/demo-2" component={Demo2} />
                    <Route path="/final/demo-3" component={Demo3} />
                    <Route path="/final/demo-4" component={Demo4} />
                    <Route path="/live/demo-2" component={LiveDemo2} />
                    <Route path="/live/demo-3" component={LiveDemo3} />
                    <Route path="/live/demo-4" component={LiveDemo4} />
                </Switch>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));