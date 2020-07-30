import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/features" className="nav-link">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/disabled" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
