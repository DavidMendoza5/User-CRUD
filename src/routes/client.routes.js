const { Router } = require('express');
const middleware = require('../middlewares/index');
const clientValidation = require('../middlewares/client.validation');
const getById = require('../middlewares/id.validation');
const clientController = require('../controllers/client.controller');
const Client = require('../schemas/client.schema');
const User = require('../schemas/user.schema');

const api = Router();

api.post('/clients', [middleware.verifyToken, middleware.validateData(clientValidation.create, 'body'), middleware.validateId(User,'body', 'agentId')], clientController.createClient);
api.get('/clients', [middleware.verifyToken], clientController.getClients);
api.get('/clients/:id', [middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id')], clientController.getClientById);
api.put('/clients/:id', [middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id'), middleware.validateId(User,'body', 'agentId')], clientController.updateClient);
api.delete('/clients/:id', [middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id')], clientController.deleteClient);

module.exports = api;