const { Router } = require('express');
const middleware = require('../middlewares/index');
const getById = require('../middlewares/id.validation');
const insuredValidation = require('../middlewares/insured.validation');
const insuredController = require('../controllers/insured.controller');
const Insured = require('../schemas/insured.schema');
const InsurancePolicy = require('../schemas/insurance.policy.schema');

const api = Router();

api.post('/insured', [
  middleware.verifyToken, middleware.validateData(insuredValidation.create, 'body'),
  middleware.validateId(InsurancePolicy, 'body', 'insurancePolicyId')],
  insuredController.createInsured
);
api.get('/insured/:id', [
  middleware.verifyToken, middleware.validateData(getById, 'params'), middleware.validateId(Insured,'params', 'id')
  ],
  insuredController.getInsuredById
);
api.get('/insured', [middleware.verifyToken], insuredController.getInsured);

module.exports = api;