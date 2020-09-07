import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className="App-nav">
        <div className="App-logo">Blogi</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles-list">Articles</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
);

export default Nav;