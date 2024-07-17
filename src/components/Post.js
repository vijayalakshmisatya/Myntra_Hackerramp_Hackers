import React from 'react';
import '../styles/Post.css';

const Post = () => {
  return (
    <div className="post">
      <img src={`${process.env.PUBLIC_URL}/path-to-post-image.jpg`} alt="Post" />
      <div className="post-info">
        <h3>Influencer Name</h3>
        <p>Post description...</p>
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  );
};

export default Post;
