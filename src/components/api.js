// api.js
export const fetchPosts = async () => {
    const response = await fetch('http://localhost:3001/api/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
  export const fetchCityPosts = async (city) => {
    const response = await fetch(`http://localhost:3001/api/posts/${city}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
  export const createPost = async (post, file) => {
    const formData = new FormData();
    formData.append('user', post.user);
    formData.append('text', post.text);
    formData.append('city', post.city);
    formData.append('productLink', post.productLink);
    if (file) {
      formData.append('image', file);
    }
  
    const response = await fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data;
  };
  