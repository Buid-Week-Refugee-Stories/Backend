require('dotenv').config();
const server = require('../src/API/server');
const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Currently serving BW-Refugees on ${port}`))