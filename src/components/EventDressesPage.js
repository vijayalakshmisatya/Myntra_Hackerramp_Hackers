import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EventDressesPage.css';

const dresses = [
  { name: 'Men Formal Shirt', price: 'Rs. 804', image: 'f1formal.jpg', id: 1, link: 'https://www.myntra.com/trousers/invictus/invictus-men-formal-trousers/26959058/buy' },
  { name: 'Men Formal Trousers', price: 'Rs. 904', image: 'f2form.jpg', id: 2, link: 'https://www.myntra.com/trousers/invictus/invictus-men-formal-trousers/26959058/buy' },
  { name: 'Women Straight-Fit Sustainable Formal Trousers', price: 'Rs. 1476', image: 'f3.jpg', id: 3, link: 'https://www.myntra.com/trousers/mango/mango-women-straight-fit-sustainable-formal-trousers/21901366/buy' },
  { name: 'Women White Formal Shirt', price: 'Rs. 999', image: 'f4.jpg', id: 4, link: 'https://www.myntra.com/shirts/h%26m/hm-women-white-formal-shirt/13908196/buy' },
  // Add more dresses as needed
];

const EventDressesPage = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();

  const handleDressClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCartClick = (link, event) => {
    event.stopPropagation(); // Prevent the card click event from being triggered
    window.open(link, '_blank'); // Open the link in a new tab
  };

  return (
    <div className="event-dresses-page">
      <h1 className="event-dresses-heading">{eventName.replace(/-/g, ' ')}</h1>
      <div className="dresses-grid">
        {dresses.map((dress) => (
          <div
            key={dress.name}
            className="dress-card"
            onClick={() => handleDressClick(dress.id)}
          >
            <img src={`${process.env.PUBLIC_URL}/${dress.image}`} alt={dress.name} />
            <div className="dress-details">
              <p>{dress.name}</p>
              <p>{dress.price}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={(event) => handleAddToCartClick(dress.link, event)}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDressesPage;
