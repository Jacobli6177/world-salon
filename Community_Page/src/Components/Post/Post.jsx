import React, { useState } from 'react';
import './Post.css';

const Post = ({ username, jobTitle, profilePic, postImage }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
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
            <h4>{username}</h4>
            <p>{jobTitle}</p>
          </div>
        </div>
      </div>
      <img
        src={postImage}
        alt="Post"
        className="post-image"
      />
      <div className="post-actions">
        <button className="action-button" onClick={toggleLike}>
          {isLiked ? '❤️' : '🤍'}
        </button>
        <button className="action-button">🔗</button>
        <button className="action-button">📌</button>
      </div>
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <div className="comment-input-container">
            <img
              src="https://via.placeholder.com/30" // Placeholder for current user profile pic
              alt="Current User Profile"
              className="comment-profile-pic"
            />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="comment-input"
            />
            <button type="button" className="mic-button">🎤</button>
            <button type="button" className="image-upload-button">📷</button>
          </div>
          <button type="submit" className="submit-button">
            Comment
          </button>
        </form>
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <img
                src="https://via.placeholder.com/30"
                alt="User Profile"
                className="comment-profile-pic"
              />
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
