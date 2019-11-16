const Users = require('../../Data/models/users');
const router = require('express').Router();

// * ROUTES
router.get('/', (req, res) => {
    Users.getAll()
    .then(userList => res.status(200).json(userList))
    .catch(err => res.status(500).json({ 
        error: err,
        message: "Not able to return list of user data!"
    }))
})

module.exports = router;