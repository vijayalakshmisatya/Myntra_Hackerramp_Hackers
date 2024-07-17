import React from 'react';
import '../styles/MyPosts.css';

const MyPosts = ({ posts }) => {
  return (
    <div className="my-posts">
      {posts.length === 0 ? (
        <p>You haven't made any posts yet.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt="Avatar" className="post-avatar" />
              <div className="post-user">
                <h4>{post.user}</h4>
                <p>{post.time}</p>
              </div>
            </div>
            <p>{post.text}</p>
            {post.image && <img src={post.image} alt="Post" className="post-image" />}
            <div className="post-actions">
              <button onClick={() => window.open(post.productLink, '_blank')}>Shop</button>
              <button>Like ({post.likes})</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;
