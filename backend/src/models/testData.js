const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
});

module.exports = mongoose.model('Test', testSchema);
