const insurancePolicyService = require('../services/insurance.policy.service');

const createInsurancePolicy = async (req, res) => {
  try {
    const insurancePolicy = req.body;

    const newInsurancePolicy = await insurancePolicyService.createInsurancePolicyService(insurancePolicy);
    res.status(201).send({ newInsurancePolicy, message: 'Póliza de seguro creada' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  createInsurancePolicy,
}