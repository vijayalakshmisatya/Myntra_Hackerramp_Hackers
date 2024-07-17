import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ city, image }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/street-style/${city}`);
  };

  return (
    <div className="city-card">
      <img src={image} alt={city} className="card-image" />
      <div className="card-overlay">
        <div className="card-text">{city}</div>
        <button className="explore-button" onClick={handleExploreClick}>Explore</button>
      </div>
    </div>
  );
};

export default Card;
