const express = require('express');
const { usersRouter } = require('../routes');

const v1Router = express.Router();

v1Router.use('/users', usersRouter);

module.exports = { v1Router };