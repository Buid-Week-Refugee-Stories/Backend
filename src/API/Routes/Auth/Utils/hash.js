const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    if (password.length < 1) {
        throw new Error('Password must be at least 1 characters or longer.')
    }

    return bcrypt.hashSync(password, 10)
}

const hashCompare = (reqPass, userPass) => {
    return bcrypt.compareSync(reqPass, userPass)
}

module.exports = {
    hashCompare,
    hashPassword
}