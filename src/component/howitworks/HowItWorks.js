import React from 'react';
import './HowItWorks.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBag, faMobileAlt, faEdit, faShareAlt } from '@fortawesome/free-solid-svg-icons';


const HowItWorks = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__left">
          <div className="how-it-works__animation">
            <img
              src="/steps_nfc.png" 
              alt="NFC in Action"
              className="how-it-works__mockup"
            />
          </div>
        </div>
        <div className="how-it-works__right">
          <h2 className="how-it-works__title">How It Works</h2>
          <ol className="how-it-works__steps">
            <li>
              <h3>Purchase Your NFC Card</h3>
              <p>Get your personalized NFC card in just a few clicks.</p>
            </li>
            <li>
              <h3>Scan Your Card</h3>
              <p>Use any NFC-compatible smartphone to scan the card.</p>
            </li>
            <li>
              <h3>Add Your Information</h3>
              <p>
                Fill in your contact details, social links, or any custom info
                directly from your phone.
              </p>
            </li>
            <li>
              <h3>Start Sharing</h3>
              <p>
                Tap your card on a device to instantly share your details with
                clients or contacts.
              </p>
            </li>
          </ol>
          <button className="how-it-works__cta" onClick={scrollToPricing}>Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
