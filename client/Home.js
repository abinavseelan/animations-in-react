import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div>
            <h1>Demos</h1>
            <Link to="/final/demo-1">Demo 1 - The {'<Motion />'} component</Link>
            <Link to="/final/demo-2">Demo 2 - Dismissible cards with {'<Motion />'}</Link>
            <Link to="/final/demo-3">Demo 3 - Dismissible cards with {'<StaggeredMotion />'}</Link>
            <Link to="/final/demo-4">Demo 4 - Shared Element Transition</Link>
            <Link to="/final/demo-5">Demo 5 - Animated Menu</Link>

            <h1>Live Code!</h1>
            <Link to="/live/demo-2">Dismissible cards with {'<Motion />'}</Link>
            <Link to="/live/demo-3">Dismissible cards with {'<StaggeredMotion />'}</Link>
            <Link to="/live/demo-4">Shared Element Transition</Link>
        </div>
    </div>
);

export default Home;