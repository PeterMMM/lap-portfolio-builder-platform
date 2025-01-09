const mongoose = require('mongoose');

// Contact Info Schema
const ContactInfoSchema = new mongoose.Schema({
    phone_number: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
    address: { type: String, default: '' }
});

const ContactInfo = mongoose.model('ContactInfo', ContactInfoSchema);

module.exports = { ContactInfo };