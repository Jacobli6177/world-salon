import React, { useState } from 'react';
import './People.css';

const peopleData = [
  { id: 1, name: 'Alice Johnson', job: 'Graphic Designer', profilePic: 'https://via.placeholder.com/60' },
  { id: 2, name: 'Bob Smith', job: 'Marketing Manager', profilePic: 'https://via.placeholder.com/60' },
  { id: 3, name: 'Carol White', job: 'Software Developer', profilePic: 'https://via.placeholder.com/60' },
  { id: 4, name: 'David Brown', job: 'Sales Executive', profilePic: 'https://via.placeholder.com/60' },
  { id: 5, name: 'Emma Davis', job: 'HR Specialist', profilePic: 'https://via.placeholder.com/60' },
  { id: 6, name: 'Frank Green', job: 'Product Manager', profilePic: 'https://via.placeholder.com/60' },
  { id: 7, name: 'Grace Black', job: 'UX Designer', profilePic: 'https://via.placeholder.com/60' },
];

const PeopleYouKnow = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  const displayedPeople = showAll ? peopleData : peopleData.slice(0, 3);

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
            <button className="connect-button">Connect</button>
          </div>
        ))}
      </div>
      <button className="see-all-button" onClick={handleSeeAll}>
        {showAll ? 'See Less' : 'See All'}
      </button>
    </div>
  );
};

export default PeopleYouKnow;
