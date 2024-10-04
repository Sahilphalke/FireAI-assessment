
import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="name">Dashboard - FireAI</div>
            <ul className="nav-links">
                <li>
                    <Link to="/" style={{ color: 'white' }}>Home</Link> {}
                </li>
                <li>
                    <Link to="/analytics" style={{ color: 'white' }}>Analytics</Link> {}
                </li>
                <li>
                    <Link to="/settings" style={{ color: 'white' }}>Settings</Link> {}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
