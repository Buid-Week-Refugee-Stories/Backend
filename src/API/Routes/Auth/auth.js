const router = require('express').Router();
const Users = require('../../../Data/models/users');
const { hashPassword, hashCompare } = require('./Utils/hash');
const { generateToken } = require('./Utils/generateToken');

// * ROUTES
router.post('/register', (req, res) => {
    let user = req.body;
    const infoExist = !!user.username === true && !!user.password === true;

    if (infoExist) {
        user.password = hashPassword(user.password);

        return Users.add(user)
            .then(newUser => res.status(201).json(newUser))
            .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json({
            error: "Was not able to register with provided credentials."
        })
    }
})

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(user => {
            if (hashCompare(password, user.password)) {
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token: generateToken(user)
                });
            } else {
                return res.status(401).json({ message: "Invalid Credentials" })
            };
        })
        .catch(err => res.status(500).json({
            err,
            req: req.body
        }))
})

module.exports = router;