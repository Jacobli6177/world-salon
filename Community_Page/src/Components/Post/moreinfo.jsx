import React, { useState } from 'react';
import './moreinfo.css';

const MoreInfo = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="more-info-container">
      <button className="ellipsis-button" onClick={handleToggleMoreInfo}>
        &#8942;
      </button>
      {showMoreInfo && (
        <div className="more-info-menu">
          <ul>
            <li>Save</li>
            <li>About this account</li>
            <li>Unfollow hashtag</li>
            <li>Not interested</li>
            <li>Report</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
