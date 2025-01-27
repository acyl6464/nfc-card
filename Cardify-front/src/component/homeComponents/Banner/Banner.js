import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

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
          <h1 className="product-banner__title">Your Personalized NFC Card – Share Your Info in a Tap</h1>
          <p className="product-banner__subtitle">
          Customizable, professional, and easy to use. Let your clients access your details instantly with just one tap.
          </p>
          <button 
            className={`product-banner__button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToPricing}
          >
            Get Yours Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;