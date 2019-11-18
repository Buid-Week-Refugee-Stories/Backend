const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const { admin, username } = user;
    return jwt.sign({
        admin,
        username,
    }, process.env.JWT_SECRET, {
        expiresIn: '24 hours'
    })
}

module.exports = {
    generateToken
}