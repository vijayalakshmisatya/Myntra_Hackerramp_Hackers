import React, { useState } from 'react';
import '../styles/CityPage.css';

const CityPage = ({ city, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="city-page-container">
      <div className="image-gallery">
        <div className="side-images-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${city} street style`}
              className={`side-image ${index === currentImage ? 'current-image' : ''}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
        <div className="main-image-container">
          <img
            src={images[currentImage]}
            alt={`${city} street style`}
            className="main-image"
          />
        </div>
      </div>
      <div className="image-details">
        <button className="like-button">Like</button>
        <button className="follow-button">Follow</button>
        <button className="shop-button">Shop</button>
        <div className="user-profile">
          <img src="/images/user-profile-image.jpg" alt="User Profile" />
          <span>Uploaded by User Name</span>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
