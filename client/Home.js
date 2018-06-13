import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div>
            <Link to="/demo-1">Demo 1 - The {'<Motion />'} component</Link>
            <Link to="/demo-2">Demo 2 - The {'<StaggeredMotion />'} component</Link>
            <Link to="/demo-1">Demo 3 - Shared Element Transition</Link>
        </div>
    </div>
);

export default Home;