import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import '../styles/StreetStyle.css';

const StreetStyle = () => {
  const cityData = [
    { city: 'Mumbai', image: '/mumcard2.jpg' },
    { city: 'Udaipur', image: '/udaipur.jpg' },
    { city: 'Jaipur', image: 'jaipur.jpg' },
    { city: 'Chennai', image: 'chenniar.jpg' },
    { city: 'Kolkata', image: 'kolkata.jpg' },
  ];

  return (
    <div className="street-style-container">
      <Carousel />
      <h2 className="side-heading">Street Style Vibes from Indian Cities</h2>
      <div className="cards-container">
        {cityData.map((city, index) => (
          <Card key={index} city={city.city} image={city.image} />
        ))}
      </div>
    </div>
  );
};

export default StreetStyle;
