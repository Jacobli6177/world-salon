import React from 'react';
import './Hashtag.css';

const hashtags = [
  '#Technology',
  '#Design',
  '#Development',
  '#ReactJS',
  '#CSS',
  '#JavaScript',
  '#WebDev',
];

const Hashtag = () => {
  return (
    <div className="hashtags-container">
      <h2>Follow Hashtags</h2>
      <ul className="hashtags-list">
        {hashtags.map((hashtag, index) => (
          <li key={index} className="hashtag">
            {hashtag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hashtag;
