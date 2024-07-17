import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const images = [
    '/carousel1.jpg',
    '/car2.jpg',
    '/car3.jpg',
    '/car7.jpg',
    '/car8.jpg',
    '/car9.jpg',
    '/car10.jpg',
    '/car11.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="Street Style" className="carousel-image" />
      <button className="carousel-button prev" onClick={prevImage}>&lt;</button>
      <button className="carousel-button next" onClick={nextImage}>&gt;</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
      <div className="explore-text">Explore Vibes of Indian Cities</div>
    </div>
  );
};

export default Carousel;
