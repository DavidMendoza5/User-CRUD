const { Router } = require('express');
const api = Router();

const userRoutes = require('./user.routes');
const clientRoutes = require('./client.routes');

api.use(userRoutes);
api.use(clientRoutes);

module.exports = api;