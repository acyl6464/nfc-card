// header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">NFC AGADIR</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;
