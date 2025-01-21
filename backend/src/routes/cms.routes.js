const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

//create a new blog
router.post('/createBlog', blogController.createBlog);
router.put('/blog/:id', blogController.updateBlog);

//like a blog
router.post('/blog/like', blogController.likeBlog);
router.post('/blog/unlike', blogController.unlikeBlog);

module.exports = router;
