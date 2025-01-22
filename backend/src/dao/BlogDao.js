const {Blog, Like, Comment} = require('../models/BlogData');
const mongoose = require('mongoose');

// Create a new blog
exports.createBlog = async (blogData) => {
    try {
        const blog = new Blog(blogData);
        return await blog.save();
    } catch (error) {
        throw new Error(`Error in DAO layer: ${error.message}`);
    }
};

exports.updateBlog = async (blogId, updateData) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            blogId,
            { ...updateData, updated_at: new Date() },
            { new: true }
        );
        return updatedBlog;
    } catch (error) {
        throw new Error(`Error in DAO layer: ${error.message}`);
    }
};

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

exports.addLike = async (likeData) => {
    try {
        if (!isValidObjectId(likeData.blog_id) || !isValidObjectId(likeData.user_id)) {
            throw new Error("Invalid blog_id or user_id format.");
        }

        likeData.blog_id = new mongoose.Types.ObjectId(likeData.blog_id);
        likeData.user_id = new mongoose.Types.ObjectId(likeData.user_id);

        const like = new Like(likeData);
        return await like.save();
    } catch (error) {
        throw new Error(`Error in DAO layer: ${error.message}`);
    }
};

exports.removeLike = async (blogId, userId) => {
    try {
        if (!isValidObjectId(blogId) || !isValidObjectId(userId)) {
            throw new Error("Invalid blog_id or user_id format.");
        }

        blogId = new mongoose.Types.ObjectId(blogId);
        userId = new mongoose.Types.ObjectId(userId);

        return await Like.findOneAndDelete({ blog_id: blogId, user_id: userId });
    } catch (error) {
        throw new Error(`Error in DAO layer: ${error.message}`);
    }
};

exports.deleteBlog = async (blogId) => {
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        throw new Error('Invalid blog ID');
    }

    await Comment.deleteMany({ blog_id: blogId }); // Remove associated comments
    await Like.deleteMany({ blog_id: blogId }); // Remove associated likes
    return await Blog.findByIdAndDelete(blogId);
};

exports.getBlogWithDetails = async (blogId) => {
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        throw new Error('Invalid blog ID');
    }

    const blog = await Blog.findById(blogId);
    if (!blog) throw new Error('Blog not found.');

    const likeCount = await Like.countDocuments({ blog_id: blogId });
    const commentCount = await Comment.countDocuments({ blog_id: blogId });

    return {
        ...blog.toObject(),
        likeCount,
        commentCount,
    };
};

exports.addComment = async (commentData) => {
    const comment = new Comment(commentData);
    return await comment.save();
};

exports.updateComment = async (commentId, content) => {
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        throw new Error('Invalid comment ID');
    }

    return await Comment.findByIdAndUpdate(
        commentId,
        { content, updated_at: new Date() },
        { new: true }
    );
};

exports.deleteComment = async (commentId) => {
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        throw new Error('Invalid comment ID');
    }

    return await Comment.findByIdAndDelete(commentId);
};

