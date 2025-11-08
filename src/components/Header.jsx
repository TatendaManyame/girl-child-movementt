import React, { useState } from 'react';
import { FaFemale, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <FaFemale />
            <span>The Girl Child Movement</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
              <li><a href="#challenges" onClick={closeMenu}>Challenges</a></li>
              <li><a href="#solution" onClick={closeMenu}>Solution</a></li>
              <li><a href="#impact" onClick={closeMenu}>Impact</a></li>
              <li><a href="#roadmap" onClick={closeMenu}>Roadmap</a></li>
              <li><a href="#team" onClick={closeMenu}>Team</a></li>
              <li><a href="#contact" className="btn" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
              <li><a href="#challenges" onClick={closeMenu}>Challenges</a></li>
              <li><a href="#solution" onClick={closeMenu}>Solution</a></li>
              <li><a href="#impact" onClick={closeMenu}>Impact</a></li>
              <li><a href="#roadmap" onClick={closeMenu}>Roadmap</a></li>
              <li><a href="#team" onClick={closeMenu}>Team</a></li>
              <li><a href="#contact" className="btn" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          {/* Overlay for mobile menu */}
          {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
        </div>
      </div>
    </header>
  );
};

export default Header;