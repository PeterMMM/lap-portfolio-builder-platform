const blogDao = require('../dao/BlogDao');

// Blog Service
exports.createBlog = async (title, description, userId) => {
    if (!title || !description || !userId) {
        throw new Error('All fields (title, description, userId) are required.');
    }

    const blogData = {
        title,
        description,
        user_id: userId,
        created_at: new Date(),
        updated_at: new Date(),
    };

    try {
        return await blogDao.createBlog(blogData);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

exports.updateBlog = async (blogId, title, description) => {
    if (!blogId || (!title && !description)) {
        throw new Error('Blog ID and at least one field (title or description) are required.');
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;

    try {
        const updatedBlog = await blogDao.updateBlog(blogId, updateData);
        if (!updatedBlog) throw new Error('Blog not found.');
        return updatedBlog;
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

exports.likeBlog = async (blogId, userId) => {
    if (!blogId || !userId) {
        throw new Error('Blog ID and User ID are required.');
    }

    const likeData = { blog_id: blogId, user_id: userId, created_at: new Date() };
    return await blogDao.addLike(likeData);
};

exports.unlikeBlog = async (blogId, userId) => {
    if (!blogId || !userId) {
        throw new Error('Blog ID and User ID are required.');
    }

    return await blogDao.removeLike(blogId, userId);
};

// Delete a blog
exports.deleteBlog = async (blogId) => {
    if (!blogId) throw new Error('Blog ID is required.');

    try {
        return await blogDao.deleteBlog(blogId);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

// Fetch a blog with like/comment counts
exports.getBlogWithDetails = async (blogId) => {
    if (!blogId) throw new Error('Blog ID is required.');

    try {
        return await blogDao.getBlogWithDetails(blogId);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

// Add a comment
exports.addComment = async (blogId, userId, content) => {
    if (!blogId || !userId || !content) {
        throw new Error('All fields (blogId, userId, content) are required.');
    }

    const commentData = {
        blog_id: blogId,
        user_id: userId,
        content,
        created_at: new Date(),
        updated_at: new Date(),
    };

    try {
        return await blogDao.addComment(commentData);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

// Update a comment
exports.updateComment = async (commentId, content) => {
    if (!commentId || !content) {
        throw new Error('Comment ID and content are required.');
    }

    try {
        return await blogDao.updateComment(commentId, content);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};

// Delete a comment
exports.deleteComment = async (commentId) => {
    if (!commentId) throw new Error('Comment ID is required.');

    try {
        return await blogDao.deleteComment(commentId);
    } catch (error) {
        throw new Error(`Error in Service layer: ${error.message}`);
    }
};