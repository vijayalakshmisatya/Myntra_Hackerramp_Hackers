import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StreetStyle from './components/StreetStyle';
import EventBasedOutfits from './components/EventBasedOutfits';
import MyPosts from './components/MyPosts';
import Community from './components/Community';
import CityPage from './components/CityPage';
import EventDressesPage from './components/EventDressesPage';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const cityImages = {
    Mumbai: [
      { imageUrl: '/mum3.jpg', shopLink: 'https://www.myntra.com/dresses/oomph%21/oomph-round-neck-bodycon-dress/23039004/buy' },
      { imageUrl: '/mum1.jpg', shopLink: 'https://www.myntra.com/co-ords/lulu+&+sky/-lulu--sky--printed-collar-neck-shirt-with-shorts-co-ords/25270350/buy' },
      { imageUrl: '/mum4.jpg', shopLink: 'https://www.myntra.com/shirts/dennison/dennison-smart-textured-oversized-shirt/28905346/buy' },
      { imageUrl: '/mp.jpg', shopLink: 'https://www.myntra.com/dresses/aayu/aayu-self-design-ruffles-detail-flounce-georgette-midi-fit--flare-dress/21850892/buy?keyword=&matchtype=&target=&placement=&gad_source=1'}
    ],
    Delhi: [
      { imageUrl: '/delhi1.jpg', shopLink: '/shop/delhi/product1' },
      { imageUrl: '/delhi2.jpg', shopLink: '/shop/delhi/product2' },
      { imageUrl: '/delhi3.jpg', shopLink: '/shop/delhi/product3' }
    ],
    Jaipur: [
      { imageUrl: '/jaipur1.jpg', shopLink: '/shop/jaipur/product1' }
    ],
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const addNewPost = (newPost) => {
    axios.post('http://localhost:5000/api/posts', newPost)
      .then(response => {
        setPosts([response.data, ...posts]);
      })
      .catch(error => console.error('Error adding new post:', error));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/street-style" element={<StreetStyle />} />
        <Route path="/event-based-outfits" element={<EventBasedOutfits />} />
        <Route path="/my-posts" element={<MyPosts posts={posts.filter(post => post.user === 'Satya D')} />} />
        <Route path="/community" element={<Community posts={posts} addNewPost={addNewPost} />} />
        {Object.keys(cityImages).map((city) => (
          <Route
            key={city}
            path={`/street-style/${city}`}
            element={<CityPage city={city} images={cityImages[city]} posts={posts.filter(post => post.text.toLowerCase().includes(`#${city.toLowerCase()}`))} />}
          />
        ))}
        <Route path="/event/:eventName" element={<EventDressesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
