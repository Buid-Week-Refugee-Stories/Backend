const jwt = require("jsonwebtoken");

const decode = (request, requireAuth = true) => {
    const header = request ?
        request.headers.authorization :
        request.connection.context.Authorization

    if (header) {
        const token = header.replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded.username
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    }

    return null
}

module.exports = {
    decode
}