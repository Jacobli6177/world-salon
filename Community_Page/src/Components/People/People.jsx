import React, { useState } from 'react';
import './People.css';
import { getImageUrl } from '../../../utils';

const peopleData = [
  { id: 1, name: 'Alice Johnson', job: 'Graphic Designer', profilePic: getImageUrl("people/people1.png") },
  { id: 2, name: 'Bob Smith', job: 'Marketing Manager', profilePic: getImageUrl("people/people2.png") },
  { id: 3, name: 'Carol White', job: 'Software Developer', profilePic: getImageUrl("people/people3.png") },
  { id: 4, name: 'David Brown', job: 'Sales Executive', profilePic: 'https://via.placeholder.com/60' },
  { id: 5, name: 'Emma Davis', job: 'HR Specialist', profilePic: 'https://via.placeholder.com/60' },
  { id: 6, name: 'Frank Green', job: 'Product Manager', profilePic: 'https://via.placeholder.com/60' },
  { id: 7, name: 'Grace Black', job: 'UX Designer', profilePic: 'https://via.placeholder.com/60' },
];

const ProfilePopup = ({ person, onClose }) => (
  <div className="profile-popup">
    <button className="close-popup" onClick={onClose}>X</button>
    <img src={person.profilePic} alt={person.name} className="profile-pic" />
    <h4>{person.name}</h4>
    <p>{person.job}</p>
  </div>
);

const PeopleYouKnow = () => {
  const [showAll, setShowAll] = useState(false);
  const [people, setPeople] = useState(peopleData);
  const [popupPerson, setPopupPerson] = useState(null);

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  const handleConnect = (person) => {
    setPopupPerson(person);
  };

  const handleClosePopup = () => {
    setPopupPerson(null);
    setPeople(people.filter(p => p.id !== popupPerson.id));
  };

  const displayedPeople = showAll ? people : people.slice(0, 3);

  return (
    <div className={`people-you-know ${showAll ? 'show-all' : ''}`}>
      <h2>People You May Know</h2>
      <div className="people-list">
        {displayedPeople.map((person) => (
          <div key={person.id} className="person-card">
            <img src={person.profilePic} alt={person.name} className="profile-pic" />
            <div className="person-info">
              <h4>{person.name}</h4>
              <p>{person.job}</p>
            </div>
            <button className="connect-button" onClick={() => handleConnect(person)}>Connect</button>
          </div>
        ))}
      </div>
      <div className="border-container"></div>
      <button className="see-all-button" onClick={handleSeeAll}>
        {showAll ? 'See Less' : 'See All'}
      </button>
      {popupPerson && (
        <ProfilePopup person={popupPerson} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default PeopleYouKnow;
