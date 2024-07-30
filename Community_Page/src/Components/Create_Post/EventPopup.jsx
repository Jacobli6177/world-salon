import React from 'react';
import './EventPopup.css'; // Add your styles here
import { getImageUrl } from '../../../utils';

const EventPopup = ({ events, onClose }) => {
  return (
    <div className="event-popup-overlay">
      <div className="event-popup">
        <button className="event-popup-close" onClick={onClose} >
          <img className="close-button" src={getImageUrl("event/X.png")}/>
        </button>
        <h2>Choose an Event</h2>
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <img src={event.image} alt={event.topic} className="event-image" />
              <div className="event-details">
                <h3 className="event-topic">{event.topic}</h3>
                <p className="event-description">{event.description}</p>
              </div>
              <button className="event-options">⋮</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventPopup;
