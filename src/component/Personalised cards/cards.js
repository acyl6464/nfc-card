import React, { useEffect, useState } from "react";
import "./cards.css";

function Cards() {
  const [data, setData] = useState();
  useEffect(() => {
    const arr = [
      {
        title: "Standard NFC Card",
        description:
          "Simple and functional, this card is perfect for everyday use",
        image: "image/home page/card3.png",
        prix: "9.99",
      },
      {
        title: "Eco-Friendly NFC Card",
        description:
          "Sustainable and unique, this eco-friendly card is made from recycled or natural materials.",
        image: "image/home page/card1.png",
        prix: "19.99",
      },
      {
        title: "Premium NFC Card",
        description:
          "Elegant and professional, this card is crafted with premium materials to leave a lasting impression",
        image: "image/home page/card1.png",
        prix: "24.99",
      },
    ];
    setData(arr);
  },[]);
  return (
    <div className="Cards">
      <div className="Cards_head">
        <h1>Personalized NFC Cards for Every Need</h1>
        <p>
        Designed for professionals, entrepreneurs, and businesses
        who value simplicity and impact.
        </p>
      </div>
      <div className="our">
        {data?.map(card=>(
            <div className="info">
          <img src={card.image} alt="Our Mission" />
          <span className="title"> {card.title}</span>
          <p>{card.description}</p>
          <span className="prix">{card.prix} MAD</span>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default Cards;
