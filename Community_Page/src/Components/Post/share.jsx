import React, { useState } from 'react';
import './share.css';

const SharePopup = ({ users, onClose, onShare }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserToggle = (user) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(user)
        ? prevSelectedUsers.filter((u) => u !== user)
        : [...prevSelectedUsers, user]
    );
  };

  const handleShare = () => {
    onShare(selectedUsers);
    onClose();
  };

  return (
    <div className="share-popup">
      <div className="share-popup-content">
        <h3>Share Post</h3>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user)}
                  onChange={() => handleUserToggle(user)}
                />
                {user.name}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleShare}>Share</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default SharePopup;
