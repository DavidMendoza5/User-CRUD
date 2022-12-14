const { Router } = require('express');
const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/index');
const userValidation = require('../middlewares/user.validation');
const getById = require('../middlewares/id.validation');
const Agent = require('../schemas/user.schema');

const api = Router();

api.post('/login', userController.logIn);
api.get('/users', [middleware.verifyToken], userController.getUsers);
api.get('/users/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Agent,'params', 'id')
  ],
  userController.getUserById
);
api.post('/users',  [
    middleware.verifyToken, middleware.validateData(userValidation.create, 'body'), middleware.validateEmail(Agent, 'body', 'email')
  ],
  userController.createUser
);
api.put('/users/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Agent,'params', 'id'),
    middleware.validateData(userValidation.update, 'body')
  ],
  userController.updateUser
);
api.delete('/users/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Agent,'params', 'id')
  ],
  userController.deleteUser
);

module.exports = api;