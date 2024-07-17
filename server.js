const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

let posts = [];

app.post('/api/posts', upload.single('image'), (req, res) => {
  const newPost = {
    id: posts.length + 1,
    user: req.body.user,
    time: new Date().toLocaleString(),
    text: req.body.text,
    image: req.file ? `/uploads/${req.file.filename}` : null,
    city: req.body.city,
    productLink: req.body.productLink,
    likes: 0,
    followed: false,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:city', (req, res) => {
  const cityPosts = posts.filter(post => post.city === req.params.city);
  res.json(cityPosts);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
