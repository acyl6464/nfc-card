import React, { useState, useMemo } from 'react';
import './NFCCardPriceCalculator.css';

const NFCCardPriceCalculator = () => {
  // State management
  const [quantity, setQuantity] = useState(1);
  const [customDesign, setCustomDesign] = useState(false);
  const [logoInclusion, setLogoInclusion] = useState(false);

  // Pricing tiers and calculations
  const PRICING_TIERS = [
    { min: 1, max: 10, pricePerCard: 99 },
    { min: 11, max: 50, pricePerCard: 89 },
    { min: 51, max: 100, pricePerCard: 79 }
  ];

  // Calculate current pricing tier
  const currentTier = useMemo(() => 
    PRICING_TIERS.find(tier => 
      quantity >= tier.min && quantity <= tier.max
    ) || PRICING_TIERS[0]
  , [quantity]);

  // Additional costs for customization
  const CUSTOM_DESIGN_COST = 20;
  const LOGO_INCLUSION_COST = 10;

  // Calculate total price
  const calculateTotalPrice = () => {
    let basePrice = quantity * currentTier.pricePerCard;
    if (customDesign) basePrice += quantity * CUSTOM_DESIGN_COST;
    if (logoInclusion) basePrice += quantity * LOGO_INCLUSION_COST;
    return basePrice;
  };

  return (
    <div className="price-calculator" id="pricing">
      <h2>Calculate Your Price</h2>
      <div className="calculator-container">
        <div className="quantity-selector">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </div>

        <div className="customization-options">
          <div className="option">
            <input
              type="checkbox"
              id="customDesign"
              checked={customDesign}
              onChange={() => setCustomDesign(!customDesign)}
            />
            <label htmlFor="customDesign">
              Custom Design (+{CUSTOM_DESIGN_COST} MAD/card)
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="logoInclusion"
              checked={logoInclusion}
              onChange={() => setLogoInclusion(!logoInclusion)}
            />
            <label htmlFor="logoInclusion">
              Logo Inclusion (+{LOGO_INCLUSION_COST} MAD/card)
            </label>
          </div>
        </div>

        <div className="price-display">
          <div className="price-breakdown">
            <div className="breakdown-item">
              <span>Base Price:</span>
              <span>{currentTier.pricePerCard} MAD/card</span>
            </div>
            {customDesign && (
              <div className="breakdown-item">
                <span>Custom Design:</span>
                <span>+{CUSTOM_DESIGN_COST} MAD/card</span>
              </div>
            )}
            {logoInclusion && (
              <div className="breakdown-item">
                <span>Logo Inclusion:</span>
                <span>+{LOGO_INCLUSION_COST} MAD/card</span>
              </div>
            )}
          </div>
          <h3>Total Price:</h3>
          <p className="price">{calculateTotalPrice()} MAD</p>
          <button className="buy-now-btn">Buy Now</button>
          <div className="discount-notes">
            <p>10% discount for 11-50 cards</p>
            <p>20% discount for 50+ cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFCCardPriceCalculator;