require('dotenv').config();
const server = require('../src/API/server');
const port = process.env.PORT || 4000;
const dynoPing = require('./API/Utils/dynoPing');

process.env.DB_ENV === 'production' &&
server.listen(port, () => dynoPing('bw-refugees.herokuapp.com'));

process.env.DB_ENV !== ('test' || 'production') && process.env.PORT &&
server.listen(port, () => console.log(`Currently serving BW-Refugees on ${port}`));