const mongoose = require('mongoose');

// Project Schema
const ProjectSchema = new mongoose.Schema({
    project_name: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    file_size: { type: Number, required: true },
    chunk_size: { type: Number, required: true },
    upload_date: { type: Date, default: Date.now },
    check_sum: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// Chunk Schema
const ChunkSchema = new mongoose.Schema({
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    sequence_number: { type: Number, required: true },
    data: { type: Buffer, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);
const Chunk = mongoose.model('Chunk', ChunkSchema);

module.exports = { Project, Chunk };
