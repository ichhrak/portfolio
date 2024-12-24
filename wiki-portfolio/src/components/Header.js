import React, { useState } from 'react';
import './Header.css'; // Import the new CSS file
import logo from '../pictures/logo.png'; // Import the logo image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Hamburger Menu */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
        <a className="main-menu">
          Main menu
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About Me
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {/* Wikipedia Logo and Search Bar */}
      <div className="logo-search-container">
        <div className="logo-container">
          <img
            src={logo}  // Use the imported local image
            alt="Wikipedia Logo"
            className="logo"
          />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
