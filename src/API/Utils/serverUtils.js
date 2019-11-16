// * SETTINGS & PKGS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

module.exports = [
    express.json(),
    morgan('combined'),
    helmet(),
    cors()
];