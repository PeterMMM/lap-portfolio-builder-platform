const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
    const secret = process.env.JWT_SECRET;

    const expiresIn = '1s';

    return jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn,
    });
};


const generateRefreshToken = (payload) => {
    const secret = process.env.JWT_SECRET;

    const expiresIn = '7d';

    return jwt.sign(payload, secret, {
        algorithm: 'HS256',
        expiresIn,
    });
};

const validateToken = (token) => {

    const secret = process.env.JWT_SECRET;

    try {

        const decoded = jwt.verify(token, secret); 
        return { valid: true, expired: false, decoded };

    } catch (error) {

        const isExpired = error.name === 'TokenExpiredError';
        return { valid: false, expired: isExpired, error: error.message };

    }
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    validateToken
};
