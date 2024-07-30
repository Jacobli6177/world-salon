import React, { useState } from 'react';
import './Create_Post.css';
import { getImageUrl } from "../../../utils";
import EventPopup from './EventPopup'; // Import the EventPopup component

const CreatePost = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() !== '') {
      onPostSubmit(postContent);
      setPostContent('');
    }
  };

  const handleEventClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  // Sample events data
  const events = [
    {
      image: getImageUrl("event/event1.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },
    {
      image: getImageUrl("event/event2.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },    {
      image: getImageUrl("event/event3.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },    {
      image: getImageUrl("event/event4.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },    {
      image: getImageUrl("event/event5.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },    {
      image: getImageUrl("event/event1.png"),
      topic: 'Unleashing Creativity with AI:',
      description: 'A Deep Dive into AI in Research.',
    },

    
    // Add more events as needed
  ];
  

  return (
    <div className="create-post">
      <div className="create-post-header">
        <div className="post-input-wrapper">
          <img
            src={getImageUrl("create_post/create_post_pic.png")} // Placeholder for the current user profile pic
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
              src={getImageUrl("create_post/pencil_icon.png")} // Placeholder for the pencil icon
              alt="Edit"
              className="pencil_icon"
            />
          )}
        </div>
      </div>
      <div className="create-post-footer">
        <button className="footer-icon-button">
          <img src={getImageUrl("create_post/pic_icon.png")} className="icon" />
          <span className='text'>Photo</span>
        </button>        
        <button className="footer-icon-button">
          <img src={getImageUrl("create_post/video_icon.png")} className="icon" />
          <span className='text'>Video</span>
        </button>
        <button className="footer-icon-button" onClick={handleEventClick}>
          <img src={getImageUrl("create_post/event_icon.png")} className="icon" />
          <span className='text'>Event</span>
        </button>
        <button className="footer-icon-button">
          <img src={getImageUrl("create_post/document_icon.png")} className="icon" />
          <span className='text'>Article</span>
        </button>
        <button className="send-button" onClick={handlePostSubmit}>
          ➤
        </button>
      </div>
      {isPopupVisible && (
        <EventPopup events={events} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default CreatePost;
