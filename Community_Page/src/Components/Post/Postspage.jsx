import React from 'react';
import Post from './Post';
import './Postspage.css';

const PostsPage = () => {
  const postsData = [
    {
      username: 'John Doe',
      jobTitle: 'Software Engineer',
      profilePic: 'https://via.placeholder.com/40',
      postImage: 'https://via.placeholder.com/600x400',
    },
    {
      username: 'Jane Smith',
      jobTitle: 'Product Manager',
      profilePic: 'https://via.placeholder.com/40',
      postImage: 'https://via.placeholder.com/600x400',
    },
    // Add more post objects here
  ];

  return (
    <div className="posts-page">
      {postsData.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          jobTitle={post.jobTitle}
          profilePic={post.profilePic}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
};

export default PostsPage;
