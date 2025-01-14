import React from 'react';
import './HowItWorks.css'; // Importing regular CSS file

const HowItWorks = () => {
  const steps = [
    {
      icon: "/image/home page/icon1.svg", // Edit this path to your local icon
      title: "Order Your NFC Card",
      description: "Select your design, customize it with your branding or personal details, and place your order effortlessly. Your card will be ready in no time."
    },
    {
      icon: "/image/home page/icon2.svg", // Edit this path to your local icon
      title: "Activate Your Card",
      description: "Once received, activate your card by tapping it on your smartphone. It's quick, intuitive, and requires no additional app downloads."
    },
    {
      icon: "/image/home page/icon3.svg", // Edit this path to your local icon
      title: "Share Your Details",
      description: "Simply tap your NFC card on any device to instantly share your contact details, social links, or business info. Make every interaction memorable!"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="imageColumn">
          <img
            loading="lazy"
            src="/image/home page/how-it-works.svg" // Edit this path to your local image
            alt="NFC card demonstration"
            className="mainImage"
          />
        </div>
        <div className="contentColumn">
          <div className="content">
            <h2 className="title">
              How It Works – Effortless Networking in 4 Simple Steps
            </h2>
            {steps.map((step, index) => (
              <div key={index} className="stepContainer">
                <img
                  loading="lazy"
                  src={step.icon} // Local icon for each step
                  alt={`${step.title} icon`}
                  className="stepIcon"
                />
                <div className="stepContent">
                  <h3 className="stepTitle">{step.title}</h3>
                  <p className="stepDescription">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
