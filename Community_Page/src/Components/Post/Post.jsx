import React, { useState } from 'react';
import './Post.css';
import { getImageUrl } from '../../../utils';

const Post = ({ username, jobTitle, text, profilePic, postImage, current_profile }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

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
    document.getElementById('image-upload-input').click();
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
                <h4 className='Name'>{username}</h4> 
                <h5 className='JobTitle'>{jobTitle}</h5>
              </div>
              <button className="event-options">⋮</button>
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
        <button className="heart-button" onClick={toggleLike} aria-label={isLiked ? 'Unlike' : 'Like'}>
          {isLiked ? '❤️' : '🤍'}
        </button>
        <button className={`action-button ${isSaved ? 'saved' : ''}`} aria-label="Save" onClick={toggleSave}>
          <img src={getImageUrl("post/saved_icon.png")} alt="Save" className="saved-icon"/>
        </button>
        <button className="action-button" aria-label="Share" onClick={handleImageUpload}>
          <img src={getImageUrl("post/share_icon.png")} alt="Share" className="shared-icon"/>
        </button>
        <input
          type="file"
          id="image-upload-input"
          style={{ display: 'none' }} 
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <div className="comment-input-container">
            <div className="comment-icons">
              <img src={current_profile} alt="Current User Profile" className="comment-profile-pic"/>
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
                <img src={getImageUrl("post/mic_icon.png")} className="mic" alt="Record"/>
              </button>
              <button type="button" aria-label="Add Photo" className="pic-button" onClick={handleImageUpload}>
                <img src={getImageUrl("post/pic_icon.png")} className="pic" alt="Add Photo"/>
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
    </div>
  );
};

export default Post;
