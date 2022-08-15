const { Router } = require('express');
const middleware = require('../middlewares/index');
const clientValidation = require('../middlewares/client.validation');
const getById = require('../middlewares/id.validation');
const clientController = require('../controllers/client.controller');
const Client = require('../schemas/client.schema');

const api = Router();

api.post('/clients', [
    middleware.verifyToken, middleware.validateData(clientValidation.create, 'body'), middleware.validateEmail(Client, 'body', 'email')
  ],
  clientController.createClient
);
api.get('/clients', [middleware.verifyToken], clientController.getClients);
api.get('/clients/:id', [
  middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id')
  ],
  clientController.getClientById
);
api.put('/clients/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id'),
    middleware.verifyPermissions(Client), middleware.validateData(clientValidation.update, 'body')
  ],
  clientController.updateClient
);
api.delete('/clients/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Client,'params', 'id'),
    middleware.verifyPermissions(Client)
  ],
  clientController.deleteClient
);

module.exports = api;