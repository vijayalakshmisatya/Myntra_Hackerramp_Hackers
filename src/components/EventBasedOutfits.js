import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EventBasedOutfits.css';

const events = [
  { name: 'Formal Events', image: 'formal_eve.jpg' },
  { name: 'Social Events', image: 'social_eve.jpg' },
  { name: 'Cultural Events', image: 'culturaleve.jpg' },
  { name: 'Casual Outings', image: 'casualoutings.jpg' }
];


document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector('.event-dresses-heading');
  const text = "Event Dresses";

  let index = 0;

  function type() {
    if (index < text.length) {
      heading.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust typing speed here
    }
  }

  type();
});



const EventBasedOutfits = () => {
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    navigate(`/event/${event.name.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className="event-based-outfits-container">
      <h1 className="event-based-outfits-heading">Discover the Perfect Outfits for Every Occasion</h1>
      <div className="event-based-outfits">
        {events.map((event, index) => (
          <div
            key={event.name}
            className={`event-card ${index === 0 ? 'top-left' : index === 1 ? 'top-right' : index === 2 ? 'bottom-left' : 'bottom-right'}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${event.image})` }}
            onClick={() => handleEventClick(event)}
          >
            <div className="event-card-content">
              <h3>{event.name}</h3>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBasedOutfits;
