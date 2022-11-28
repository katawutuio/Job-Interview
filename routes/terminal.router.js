const express = require('express');

const {
  getShops,
  getShop,
  addShop,
  updateShop,
  deleteShop
 } = require('./terminal.controller');

const terminalRouter = express.Router();

terminalRouter.get('/api/terminals', getShops);
terminalRouter.get('/api/terminals/:id', getShop);
terminalRouter.post('/api/terminals', addShop);
terminalRouter.put('/api/terminals', updateShop);
terminalRouter.delete('/api/terminals/:id', deleteShop);

module.exports = terminalRouter;