const mongoose = require('mongoose');

// Skill Schema
const SkillSchema = new mongoose.Schema({
    skill: { type: String, required: true }
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = { Skill };