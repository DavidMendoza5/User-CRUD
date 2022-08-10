const { Router } = require('express');
const api = Router();

const userRoutes = require('./user.routes');

api.use(userRoutes);

module.exports = api;