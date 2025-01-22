const blogService = require('../services/BlogService');
const mongoose = require('mongoose');

// Controller to handle blog creation
exports.createBlog = async (req, res) => {
    const { title, description, user_id } = req.body;

    try {
        const newBlog = await blogService.createBlog(title, description, user_id);
        return res.status(201).json({
            message: 'Blog created successfully',
            data: newBlog,
        });
    } catch (error) {
        return res.status(500).json({
            message: `Error creating blog: ${error.message}`,
        });
    }
};


exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body; 

    try {
        const updatedBlog = await blogService.updateBlog(id, title, description);
        return res.status(200).json({
            message: 'Blog updated successfully',
            data: updatedBlog,
        });
    } catch (error) {
        return res.status(500).json({
            message: `Error updating blog: ${error.message}`,
        });
    }
};

// Controller for liking a blog
exports.likeBlog = async (req, res) => {
    const { blog_id, user_id } = req.body;

    try {
        const like = await blogService.likeBlog(blog_id, user_id);
        return res.status(201).json({ message: 'Blog liked successfully', data: like });
    } catch (error) {
        return res.status(500).json({ message: `Error liking blog: ${error.message}` });
    }
};

// Controller for unliking a blog
exports.unlikeBlog = async (req, res) => {
    const { blog_id, user_id } = req.body;

    try {
        const unlike = await blogService.unlikeBlog(blog_id, user_id);
        return res.status(200).json({ message: 'Blog unliked successfully', data: unlike });
    } catch (error) {
        return res.status(500).json({ message: `Error unliking blog: ${error.message}` });
    }
};

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

exports.deleteBlog = async (req, res) => {
    console.log('Delete blog route hit');
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid blog ID' });
    }

    try {
        await blogService.deleteBlog(id);
        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: `Error deleting blog: ${error.message}` });
    }
};

// Controller to fetch a blog with like/comment counts
exports.getBlogWithDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await blogService.getBlogWithDetails(id);
        return res.status(200).json({ message: 'Blog fetched successfully', data: blog });
    } catch (error) {
        return res.status(500).json({ message: `Error fetching blog: ${error.message}` });
    }
};

// Controller for creating a comment
exports.addComment = async (req, res) => {
    const { blog_id, user_id, content } = req.body;

    try {
        const comment = await blogService.addComment(blog_id, user_id, content);
        return res.status(201).json({ message: 'Comment added successfully', data: comment });
    } catch (error) {
        return res.status(500).json({ message: `Error adding comment: ${error.message}` });
    }
};

// Controller for updating a comment
exports.updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid comment ID' });
    }

    try {
        const updatedComment = await blogService.updateComment(id, content);
        return res.status(200).json({
            message: 'Comment updated successfully',
            data: updatedComment,
        });
    } catch (error) {
        return res.status(500).json({
            message: `Error updating comment: ${error.message}`,
        });
    }
};

// Controller for deleting a comment
exports.deleteComment = async (req, res) => {
    console.log('Delete comment route hit');
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid comment ID' });
    }

    try {
        await blogService.deleteComment(id);
        return res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: `Error deleting comment: ${error.message}` });
    }
};