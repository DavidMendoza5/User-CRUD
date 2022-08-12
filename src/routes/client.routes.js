const { Router } = require('express');
const middleware = require('../middlewares/index');
const getById = require('../middlewares/id.validation');
const clientController = require('../controllers/client.controller');
const Client = require('../schemas/client.schema');

const api = Router();

api.post('/clients', [middleware.verifyToken], clientController.createClient);
api.get('/clients', [middleware.verifyToken], clientController.getClients);
api.get('/clients/:id', [middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params')], clientController.getClientById);

module.exports = api;