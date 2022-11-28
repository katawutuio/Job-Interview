const express = require('express');

const terminalRouter = require('./routes/terminal.router');
const testRouter = require('./routes/test.router');

const app = express();

app.use(express.json());

app.use(terminalRouter);
app.use(testRouter);

module.exports = app;