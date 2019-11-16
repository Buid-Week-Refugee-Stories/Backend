// * PKS & SETTINGS
const Users = require('../Data/models/users');
const Stories = require('../Data/models/stories');
const serverUtils = require('./Utils/serverUtils');
const express = require('express');
const server = express();
server.use(serverUtils);

// TODO: REMOVE TEMP ROUTES HERE WITH EXPORTED ROUTES.

server.get('/users', (req, res) => {
    Users.getAll()
    .then(userList => res.status(200).json(userList))
    .catch(err => res.status(500).json({ 
        error: err,
        message: "Not able to return list of user data!"
    }))
})

server.get('/stories', (req, res) => {
    Stories.getAll()
    .then(storyList => res.status(200).json(storyList))
    .catch(err => res.status(500).json({ 
        error: err,
        message: "Not able to return list of story data!"
    }))
})

module.exports = server;