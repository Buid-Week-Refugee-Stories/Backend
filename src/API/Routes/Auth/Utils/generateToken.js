const jwt = require('jsonwebtoken');

const generateToken = (username) => {
    return jwt.sign({
        username,
    }, process.env.JWT_SECRET, {
        expiresIn: '24 hours'
    })
}

module.exports = {
    generateToken
}