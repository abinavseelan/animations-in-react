import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div>
            <Link to="/demo-1">Demo 1 - The {'<Motion />'} component</Link>
            <Link to="/demo-2">Demo 2 - Menu with {'<Motion />'}</Link>
            <Link to="/demo-3">Demo 3 - The {'<StaggeredMotion />'} component</Link>
            <Link to="/demo-4">Demo 4 - Shared Element Transition</Link>
        </div>
    </div>
);

export default Home;