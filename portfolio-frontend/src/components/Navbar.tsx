import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-brand">Portfolio</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <div className="nav-right-space"></div>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </div>
    </nav>
  );
};

export default Navbar; 