const { Router } = require('express');
const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/index');
const userValidation = require('../middlewares/user.validation');
const User = require('../schemas/user.schema');

const api = Router();

api.get('/users', userController.getUsers);
api.get('/users/:id', [middleware.validateData(userValidation.getById, 'params'), middleware.validateId(User,'params')], userController.getUserById);
api.post('/users',  [middleware.validateData(userValidation.create, 'body')], userController.createUser);
api.put('/users/:id', [middleware.validateData(userValidation.getById, 'params'), middleware.validateId(User,'params')], userController.updateUser);
api.delete('/users/:id', [middleware.validateData(userValidation.getById, 'params'), middleware.validateId(User,'params')], userController.deleteUser);

module.exports = api;