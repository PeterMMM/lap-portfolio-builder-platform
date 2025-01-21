const blogService = require('../services/BlogService');

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
