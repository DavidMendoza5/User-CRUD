const { Router } = require('express');
const api = Router();

const userRoutes = require('./user.routes');
const clientRoutes = require('./client.routes');
const insurancePolicyRoutes = require('./insurance.policy.routes');
const insuredRoutes = require('./insured.routes');

api.use(userRoutes);
api.use(clientRoutes);
api.use(insurancePolicyRoutes);
api.use(insuredRoutes);

module.exports = api;