const { Router } = require('express');
const middleware = require('../middlewares/index');
const insurancePolicyValidation = require('../middlewares/insurance.policy.validation');
const insurancePolicyController = require('../controllers/insurance.policy.controller');
const Client = require('../schemas/client.schema');
const Agent = require('../schemas/user.schema');

const api = Router();

api.post('/insurance-policies', [middleware.verifyToken, middleware.validateData(insurancePolicyValidation.create, 'body'), middleware.validateId(Agent,'body', 'agentId'), middleware.validateId(Client,'body', 'clientId')], insurancePolicyController.createInsurancePolicy);

module.exports = api;