const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

//Create a new blog
router.post('/createBlog', blogController.createBlog);
router.put('/blog/update/:id', blogController.updateBlog);
router.delete('/blog/delete/:id', blogController.deleteBlog);

//Get blog likes and comments count
router.get('/blog/:id', blogController.getBlogWithDetails);

// Comment routes
router.post('/blog/comment', blogController.addComment);
router.put('/blog/comment/update/:id', blogController.updateComment);
router.delete('/blog/comment/delete/:id', blogController.deleteComment);

//Like a blog
router.post('/blog/like', blogController.likeBlog);
router.post('/blog/unlike', blogController.unlikeBlog);

module.exports = router;
