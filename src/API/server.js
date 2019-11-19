// * PKS & SETTINGS
const usersRouter = require('./Routes/users');
const storiesRouter = require('./Routes/stories');
const authRouter = require('./Routes/Auth/auth');
const serverUtils = require('./Utils/serverUtils');
const express = require('express');
const documentation = require('./Utils/documentation');
const server = express();
server.use(serverUtils);

// * ROUTES
// TODO: THIS IS A TEMP DOCUMENTATION, IMPLEMENT SWAGGER AFTER PRIOITIZING API COMPLETION
server.get('/', (req, res) => res.status(200).redirect('https://documenter.getpostman.com/view/9207128/SW7Z495x?version=latest'));

// * ROUTERS
server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/stories', storiesRouter);

module.exports = server;