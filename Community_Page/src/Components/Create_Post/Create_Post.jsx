import React, { useState } from 'react';
import './Create_Post.css';

const CreatePost = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() !== '') {
      onPostSubmit(postContent);
      setPostContent('');
    }
  };

  return (
    <div className="create-post">
      <div className="create-post-header">
        <img
          src="https://via.placeholder.com/50" // Placeholder for the current user profile pic
          alt="User Profile"
          className="create-profile-pic"
        />
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="post-input"
        />
        <button className="additional-options-button">⋯</button>
      </div>
      <div className="create-post-footer">
      <button className="footer-icon-button">
        <img src="../../assets/create_post/pic_icon.png" className="icon" />
        C:\Users\Jacob\OneDrive\桌面\world-salon\Community_Page\src\assets\create_post
        <span></span>
      </button>        
        <button className="footer-icon-button"></button>
        <button className="footer-icon-button"></button>
        <button className="footer-icon-button"></button>
        <button className="footer-icon-button send-button" onClick={handlePostSubmit}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
