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
