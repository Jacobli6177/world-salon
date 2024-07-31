import React, { useState } from 'react';
import './Post.css';
import { getImageUrl } from '../../../utils';

const Post = ({ username, jobTitle, text, profilePic, postImage, current_profile }) => {
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
            <h4 className='Name'>{username}</h4> 
            <h5 className='JobTitle'>{jobTitle}</h5>
            <p className="post-text">{text}</p>
            <p className="Read-More"><u>Read More</u></p>
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
        <button className="action-button" aria-label="Save">
          <img src={getImageUrl("post/saved_icon.png")} alt="Save" className="saved-icon"/>
        </button>
        <button className="action-button" aria-label="Share">
          <img src={getImageUrl("post/share_icon.png")} alt="Share" className="shared-icon"/>
        </button>
      </div>
      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <div className="comment-input-container">
            <div className="comment-icons">
              <img src={current_profile} alt="Current User Profile" className="comment-profile-pic"
              />
            </div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..."
              className="comment-input"
            />
            <div className="icon-buttons">
              <button type="button" aria-label="Record Voice" className="mic-button">
                <img src={getImageUrl("post/mic_icon.png")} className= "mic" alt="Record"/>
              </button>
              <button type="button" aria-label="Add Photo" className="pic-button">
                <img src={getImageUrl("post/pic_icon.png")} className="pic" alt="Add Photo"/>
              </button>
            </div>
          </div>
        </form>
        <div className="comments">
          {comments.map((commentText, index) => (
            <div key={index} className="comment">
              <img
                src={current_profile}
                alt="Comment User Profile"
                className="comment-profile-pic"
              />
              <p>{commentText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
