import React from 'react';
import Post from './Post';
import './Postspage.css';
import { getImageUrl } from '../../../utils';

const PostsPage = () => {
  const postsData = [
    {
      username: 'John Doe',
      jobTitle: 'Software Engineer',
      text: '-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      profilePic: getImageUrl("post/profile2.png"),
      postImage: getImageUrl("post/pic1.png"),
      current_profile: getImageUrl("create_post/create_post_pic.png"),
    },
    {
      username: 'Jane Smith',
      jobTitle: 'Product Manager',
      text: '-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      profilePic: getImageUrl("post/profile1.png"),
      postImage: getImageUrl("post/pic2.png"),
      current_profile: getImageUrl("create_post/create_post_pic.png"),
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
          text={post.text} // Use 'text' here
          profilePic={post.profilePic}
          postImage={post.postImage}
          current_profile={post.current_profile}
        />
      ))}
    </div>
  );
};

export default PostsPage;
