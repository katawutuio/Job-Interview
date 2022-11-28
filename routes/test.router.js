const express = require('express');

const {
  update
} = require('./test.controller');

const testRouter = express.Router();

testRouter.post('/api/update', update);

module.exports = testRouter;