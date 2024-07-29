import React, { useState } from 'react';
import './Create_Post.css';
import { getImageUrl } from "../../../utils";


const CreatePost = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
        <div className="post-input-wrapper">
          <img
            src="https://via.placeholder.com/50" // Placeholder for the current user profile pic
            alt="User Profile"
            className="create-profile-pic"
          />
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Write something ..."
            className="post-input"
          />
          {!isFocused && (
            <img
              src= {getImageUrl("create_post/pencil_icon.png")} // Placeholder for the pencil icon
              alt="Edit"
              className="pencil_icon"
            />
          )}
        </div>
      </div>
      <div className="create-post-footer">
        <button className="footer-icon-button">
          <img src= {getImageUrl("create_post/pic_icon.png")} className="icon" />
          <span className='text'>Photo</span>
        </button>        
          <button className="footer-icon-button">
          <img src= {getImageUrl("create_post/video_icon.png")} className="icon" />
          <span className='text'>Video</span>
          </button>
          <button className="footer-icon-button">
          <img src= {getImageUrl("create_post/event_icon.png")} className="icon" />
          <span className='text'>Event</span>
          </button>
          <button className="footer-icon-button">
          <img src= {getImageUrl("create_post/document_icon.png")} className="icon" />
          <span className='text'>Article</span>
          </button>
          <button className="send-button" onClick={handlePostSubmit}>
            ➤
          </button>
      </div>
    </div>
  );
};

export default CreatePost;
