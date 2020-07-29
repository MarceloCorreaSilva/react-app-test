import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/features" className="nav-link">Features</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/disabled" className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
