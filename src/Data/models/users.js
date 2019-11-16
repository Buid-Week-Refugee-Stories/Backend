const db = require('../dbConfig');

const getAll = async () => {
    const users = await db('users')
        .select(
            'users.id',
            'users.username',
            'users.location',
            'users.admin',
            'users.created_at'
        )

    return !!users === true &&
        users.length > 0 &&
        users
}

module.exports = {
    getAll
}