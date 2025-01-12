const testService = require('../services/testService');
const jwtToken = require('../utils/jwt');


exports.greeting = (req, res) => {
    res.send('Welcome to the Project Builder Web App!');
};

// ******* GenerateToken & ValidateToken are just Test Func **********///
// exports.generateToken = (req, res) => {

//     const payload = {
//         data: "user123"
//     }

//     const token = jwtToken.generateAccessToken(payload);
//     const refreshToken = jwtToken.generateRefreshToken(payload);

//     res.send({
//         access_token: token,
//         refresh_token: refreshToken
//     })

// }

// exports.validateToken = (req, res) => {
//     const token = req.params.token; 

//     if (!token) {
//         return res.status(400).send({ error: 'Token is required' });
//     }

//     const validationResult = jwtToken.validateToken(token);

//     if (validationResult.valid) {
//         res.status(200).send({
//             valid: true,
//             expired: false,
//             payload: validationResult.decoded,
//         });
//     } else if (validationResult.expired) {
//         res.status(401).send({ valid: false, expired: true, error: 'Token has expired' });
//     } else {
//         res.status(401).send({ valid: false, expired: false, error: validationResult.error });
//     }
// };

