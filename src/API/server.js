// * PKS & SETTINGS
const usersRouter = require('./Routes/users');
const storiesRouter = require('./Routes/stories');
const serverUtils = require('./Utils/serverUtils');
const express = require('express');
const server = express();
server.use(serverUtils);

// * ROUTERS
server.use('/users', usersRouter);
server.use('/stories', storiesRouter);

module.exports = server;