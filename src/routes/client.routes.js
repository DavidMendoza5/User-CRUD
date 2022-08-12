const { Router } = require('express');
const middleware = require('../middlewares/index');
const clientController = require('../controllers/client.controller');

const api = Router();

api.post('/clients', clientController.createClient);
api.get('/clients', [middleware.verifyToken], clientController.getClients);

module.exports = api;