const serverUtils = require('./Utils/serverUtils'); 
const express = require('express');
const server = express();
server.use(serverUtils);

server.get('/', (req, res) => res.status(200).json({ response: 'Server is up and running' }))

module.exports = server;