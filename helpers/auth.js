const jwt = require('jsonwebtoken');

const generateToken = (userId, secretKey)  =>{
    const payload = {userId};
    const options = {expireIn: '1h'}

    return jwt.sign(payload, secretKey, options);
}

module.exports = generateToken;