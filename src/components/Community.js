import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/Community.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const [likes, setLikes] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({ text: '', image: null, link: '', city: '' });
  const [followed, setFollowed] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
      setLikes(data.map(post => post.likes));
      setFollowed(data.map(post => post.followed));
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedPostImage(image);
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleFollow = (index) => {
    const newFollowed = [...followed];
    newFollowed[index] = !newFollowed[index];
    setFollowed(newFollowed);
  };

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('user', 'Satya D'); // Replace with actual user
    formData.append('text', newPost.text);
    formData.append('city', newPost.city);
    formData.append('productLink', newPost.link);
    if (newPost.image) {
      formData.append('image', newPost.image);
    }

    try {
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to post');
      }

      const post = await response.json();
      setPosts([...posts, post]);
      setShowCreatePost(false);
      setNewPost({ text: '', image: null, link: '', city: '' });
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="community-page">
      <div className="left-container">
        <div className="profile-section">
          <img src="p3.jpeg" alt="Profile" />
          <h3>Satya D</h3>
        </div>
      </div>

      <div className="middle-container">
        <div className="create-post-section">
          <img src="p3.jpeg" alt="Profile" />
          <input type="text" placeholder="What do you want to talk about?" onClick={() => setShowCreatePost(true)} />
        </div>

        {showCreatePost && (
          <div className="create-post-modal">
            <textarea
              placeholder="Write your post here..."
              value={newPost.text}
              onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
            />
            <input
              type="text"
              placeholder="Share shop links here..."
              value={newPost.link}
              onChange={(e) => setNewPost({ ...newPost, link: e.target.value })}
            />
            <input
              type="text"
              placeholder="City"
              value={newPost.city}
              onChange={(e) => setNewPost({ ...newPost, city: e.target.value })}
            />
            <div className="post-options">
              <button onClick={handlePost}>Post</button>
              <button onClick={() => setShowCreatePost(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="posts-section">
          {posts.map((post, index) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.avatar} alt="Avatar" className="post-avatar" />
                <div className="post-user">
                  <h4>{post.user}</h4>
                  <p>{post.time}</p>
                </div>
                <button className="follow-button" onClick={() => handleFollow(index)}>
                  {followed[index] ? 'Following' : 'Follow'}
                </button>
              </div>
              <p>{post.text}</p>
              {post.image && <img src={post.image} alt="Post" className="post-image" onClick={() => handleImageClick(post.image)} />}
              <div className="post-actions">
                <button onClick={() => window.open(post.productLink, '_blank')}>Shop</button>
                <button onClick={() => handleLike(index)}>Like ({likes[index]})</button>
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={!!selectedPostImage} onRequestClose={() => setSelectedPostImage(null)}>
          {selectedPostImage && <img src={selectedPostImage} alt="Zoomed" />}
        </Modal>
      </div>

      <div className="right-container">
        <div className="profile-stats">
          <div>Supercoins: 100</div>
          <div>Followers: 34</div>
          <div>Following: 50</div>
        </div>
        <button className="my-posts-button">My Posts</button>
        
        {/* Add trending posts here */}
      </div>
    </div>
  );
};

export default CommunityPage;
