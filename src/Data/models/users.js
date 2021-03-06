const db = require('../dbConfig');

const add = async (user) => {
    const [id] = await db('users').insert(user, 'id');

    return findById(id)
}

const booleanify = (user) => {

    if (user.admin === true || user.admin === false) user;

    if (user.admin === 0 || user.admin === '0') {
        return {
            ...user,
            admin: false
        }
    };

    if (user.admin === 1 || user.admin === '1') {
        return {
            ...user,
            admin: true
        }
    };
}

const findBy = async (param) => {
    const user = await db("users").where(param).first();
    return booleanify(user);
}

const findById = async (id) => {
    const user = await db("users").where({ id }).first();
    return booleanify(user);
}

const getAll = async () => {
    const users = await db('users')
        .select(
            'users.id',
            'users.username',
            'users.location',
            'users.admin',
            'users.created_at'
        )

    if (process.env.DATABASE_URL && !!users === true && users.length > 0) users

    return !!users === true &&
        users.length > 0 &&
        users.map(user => booleanify(user))
}

module.exports = {
    add,
    findBy,
    findById,
    getAll
}