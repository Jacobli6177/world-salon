import React from 'react';
import './moreinfo.css';

const MoreInfo = ({ onClose }) => {  
  return (
    <div className="more-info-menu">
      <ul>
        <li>Save</li>
        <li>About this account</li>
        <li>Unfollow hashtag</li>
        <li>Not interested</li>
        <li>Report</li>
      </ul>
      <button className="close-button" onClick={onClose}>Close</button>  
    </div>
  );
};

export default MoreInfo;
