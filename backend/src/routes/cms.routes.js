const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');

//create a new blog
router.post('/createBlog', blogController.createBlog);
router.put('/blog/:id', blogController.updateBlog);
router.delete('/blog/:id', blogController.deleteBlog);

router.get('/blog/:id', blogController.getBlogWithDetails);

// Comment routes
router.post('/blog/comment', blogController.addComment);
router.put('/blog/comment/:id', blogController.updateComment);
router.delete('/blog/comment/:id', blogController.deleteComment);

//like a blog
router.post('/blog/like', blogController.likeBlog);
router.post('/blog/unlike', blogController.unlikeBlog);

module.exports = router;
