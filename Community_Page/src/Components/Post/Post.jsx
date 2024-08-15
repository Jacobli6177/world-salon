import React, { useState, useRef, useEffect } from 'react';
import './Post.css';
import MoreInfo from './moreinfo';
import SharePopup from './share';
import { getImageUrl } from '../../../utils';

const Post = ({ id, username, jobTitle, text, profilePic, postImage, current_profile }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [share, setShare] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '' || uploadedImage) {
      setComments([...comments, { text: comment, image: uploadedImage }]);
      setComment('');
      setUploadedImage(null);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    document.getElementById(`image-upload-input-${id}`).click();
  };

  const toggleShare = () => {
    setShare(!share);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMic = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setComment(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event);
      };

      recognition.onend = () => {
        recognition.stop();
      };
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          !dropdownButtonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <img
            src={profilePic}
            alt="User Profile"
            className="profile-pic"
          />
          <div>
            <div className="user-details">
              <div>
                <h4 className="Name">{username}</h4>
                <h5 className="JobTitle">{jobTitle}</h5>
              </div>
              <button
                className="event-options"
                onClick={toggleDropdown}
                ref={dropdownButtonRef}
              >
                ⋮
              </button>
              {showDropdown && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  <MoreInfo onClose={() => setShowDropdown(false)} />
                </div>
              )}
            </div>
            <p className="post-text">
              {readMore ? text : text.slice(0, 100) + '...'}
            </p>
            <p className="Read-More" onClick={toggleReadMore}>
              {readMore ? 'Read Less' : 'Read More'}
            </p>
          </div>
        </div>
      </div>
      <img
        src={postImage}
        alt="Post"
        className="post-image"
      />
      <div className="post-actions">
        <button className="action-button" onClick={toggleLike} aria-label={isLiked ? 'Unlike' : 'Like'}>
          <img
            src={isLiked ? getImageUrl("post/heart-filled.png") : getImageUrl("post/heart-outline.png")}
            alt="Like"
            className="heart-button"
          />
        </button>
        <button className="action-button" onClick={toggleSave} aria-label={isSaved ? 'Unsave' : 'Save'}>
          <img
            src={isSaved ? getImageUrl("post/saved-filled.png") : getImageUrl("post/saved-outline.png")}
            alt="Save"
            className="saved-icon"
          />
        </button>
        <button className="action-button" aria-label="Share" onClick={toggleShare}>
          <img src={getImageUrl("post/share_icon.png")} alt="Share" className="shared-icon" />
        </button>
        <input
          type="file"
          id={`image-upload-input-${id}`}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <div className="comment-input-container">
            <div className="comment-icons">
              <img src={current_profile} alt="Current User Profile" className="comment-profile-pic" />
            </div>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="comment-input"
            />
            <div className="icon-buttons">
              <button type="button" aria-label="Record Voice" className="mic-button" onClick={handleMic}>
                <img src={getImageUrl("post/mic_icon.png")} className="mic" alt="Record" />
              </button>
              <button type="button" aria-label="Add Photo" className="pic-button" onClick={handleImageUpload}>
                <img src={getImageUrl("post/pic_icon.png")} className="pic" alt="Add Photo" />
              </button>
            </div>
          </div>
        </form>
        {uploadedImage && (
          <div className="uploaded-image-preview">
            <img src={uploadedImage} alt="Uploaded Preview" />
          </div>
        )}
        <div className="comments">
          {comments.map((commentData, index) => (
            <div key={index} className="comment">
              <img
                src={current_profile}
                alt="Comment User Profile"
                className="comment-profile-pic"
              />
              <p>{commentData.text}</p>
              {commentData.image && <img src={commentData.image} alt="Comment Image" className="comment-image" />}
            </div>
          ))}
        </div>
      </div>
      {share && (
        <SharePopup />
      )}
    </div>
  );
};

export default Post;
