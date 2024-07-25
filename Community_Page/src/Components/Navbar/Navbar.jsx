import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://via.placeholder.com/80x40" alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for anything..." />
        <button className="search-button">
          🔍
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
