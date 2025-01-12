const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
    usr_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_pic: { type: String, default: '' },
    usr_role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRole', required: true },
    contact_info_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ContactInfo', required: true },
    skill_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill', default: [] }]
});

// User Role Schema
const UserRoleSchema = new mongoose.Schema({
    role: { type: String, required: true },
    description: { type: String, default: '' }
});


// Models
const User = mongoose.model('User', UserSchema);
const UserRole = mongoose.model('UserRole', UserRoleSchema);

module.exports = { User, UserRole };
