import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={`${process.env.PUBLIC_URL}/myntra   .png`} alt="Myntra Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/street-style">Street Style</Link></li>
        <li><Link to="/event-based-outfits">Event-Based Outfits</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

