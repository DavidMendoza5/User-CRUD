const { Router } = require('express');
const middleware = require('../middlewares/index');
const insuredValidation = require('../middlewares/insured.validation');
const insuredController = require('../controllers/insured.controller');
const InsurancePolicy = require('../schemas/insurance.policy.schema');

const api = Router();

api.post('/insured', [
  middleware.verifyToken, middleware.validateData(insuredValidation.create, 'body'),
  middleware.validateId(InsurancePolicy, 'body', 'insurancePolicyId')],
  insuredController.createInsured
);

module.exports = api;