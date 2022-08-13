const { Router } = require('express');
const middleware = require('../middlewares/index');
const getById = require('../middlewares/id.validation');
const insurancePolicyValidation = require('../middlewares/insurance.policy.validation');
const insurancePolicyController = require('../controllers/insurance.policy.controller');
const InsurancePolicy = require('../schemas/insurance.policy.schema');
const Client = require('../schemas/client.schema');
const Agent = require('../schemas/user.schema');

const api = Router();

api.post('/insurance-policies', [
    middleware.verifyToken, middleware.validateData(insurancePolicyValidation.create, 'body'), middleware.validateId(Agent,'body', 'agentId'), 
    middleware.validateId(Client,'body', 'clientId')
  ], 
  insurancePolicyController.createInsurancePolicy
);
api.get('/insurance-policies/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(InsurancePolicy,'params', 'id')
  ], insurancePolicyController.getcreateInsurancePolicyById
);
api.get('/insurance-policies', [middleware.verifyToken], insurancePolicyController.getcreateInsurancePolicies);
api.put('/insurance-policies/:id', [
    middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(InsurancePolicy,'params', 'id'), 
    middleware.verifyPermissions(InsurancePolicy), middleware.validateData(insurancePolicyValidation.update, 'body'),
    middleware.validateId(Agent,'body', 'agentId'), middleware.validateId(Client,'body', 'clientId')
  ], 
  insurancePolicyController.updateInsurancePolicy
);

module.exports = api;