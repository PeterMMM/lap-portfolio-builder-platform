const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const ACCESS_TOKEN_EXPIRY = process.env.JWT_ACCESS_EXPIRY || '15m'; 
const REFRESH_TOKEN_EXPIRY = process.env.JWT_REFRESH_EXPIRY || '7d'; 

const generateAccessToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: ACCESS_TOKEN_EXPIRY,
    });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: REFRESH_TOKEN_EXPIRY,
    });
};

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, expired: false, decoded };
    } catch (error) {
        const isExpired = error.name === 'TokenExpiredError';
        return { valid: false, expired: isExpired, error: error.message };
    }
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    validateToken,
};
