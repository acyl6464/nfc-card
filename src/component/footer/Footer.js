// /components/Footer.js

import React from 'react';
import './Footer.css'; // Optional for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Email: <a href="mailto:nfcagadir@info.ma">nfcagadir@info.ma</a></li>
          <li>Phone: +212688043097</li>
          <li>Location: Agadir, Morocco</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NFC Agadir. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
