import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="product-banner">
      <div className="product-banner__image-container">
        <img 
          src="/3d card.png" 
          alt="Amazing Product" 
          className="product-banner__image"
        />
      </div>
      <div className="product-banner__content">
        <div className="product-banner__box">
          <h1 className="product-banner__title">NFC Innovations</h1>
          <p className="product-banner__subtitle">
          Connect Instantly. Experience Innovation.
          </p>
          <button 
            className={`product-banner__button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;