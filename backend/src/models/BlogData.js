const mongoose = require('mongoose');

// Blog Schema
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Like Schema
const LikeSchema = new mongoose.Schema({
    blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

// Comment Schema
const CommentSchema = new mongoose.Schema({
    blog_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Models
const Blog = mongoose.model('Blog', BlogSchema);
const Like = mongoose.model('Like', LikeSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Blog, Like, Comment };
